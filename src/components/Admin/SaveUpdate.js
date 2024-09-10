import React, { useState, useEffect } from 'react';
import { Button, message, Upload, List, Card, Switch, DatePicker } from 'antd';
import { UploadOutlined, DownloadOutlined, SaveOutlined, RedoOutlined } from '@ant-design/icons';
import moment from 'moment';

const SaveUpdate = () => {
  const [backups, setBackups] = useState([]);
  const [autoBackup, setAutoBackup] = useState(false);
  const [backupInterval, setBackupInterval] = useState(null);

  useEffect(() => {
    // Загрузка списка резервных копий при монтировании компонента
    loadBackups();
    
    // Загрузка настроек автоматического резервного копирования
    const savedAutoBackup = localStorage.getItem('autoBackup') === 'true';
    const savedBackupInterval = localStorage.getItem('backupInterval');
    setAutoBackup(savedAutoBackup);
    setBackupInterval(savedBackupInterval ? moment(savedBackupInterval) : null);

    if (savedAutoBackup && savedBackupInterval) {
      scheduleBackup(moment(savedBackupInterval));
    }

    return () => {
      // Очистка таймера при размонтировании компонента
      if (window.backupTimer) {
        clearTimeout(window.backupTimer);
      }
    };
  }, []);

  const loadBackups = () => {
    const savedBackups = JSON.parse(localStorage.getItem('backups')) || [];
    setBackups(savedBackups);
  };

  const saveBackup = () => {
    const allData = {
      products: JSON.parse(localStorage.getItem('products')) || [],
      contacts: JSON.parse(localStorage.getItem('contacts')) || {},
      homepage: JSON.parse(localStorage.getItem('homepage')) || {},
      seoSettings: JSON.parse(localStorage.getItem('seoSettings')) || {},
      reviews: JSON.parse(localStorage.getItem('reviews')) || [],
      chipTuningReviews: JSON.parse(localStorage.getItem('chipTuningReviews')) || [],
      socialMedia: JSON.parse(localStorage.getItem('socialMedia')) || {},
      googleAnalytics: JSON.parse(localStorage.getItem('googleAnalyticsSettings')) || {},
      // Добавьте здесь другие данные, которые нужно сохранить
    };

    const backup = {
      data: allData,
      timestamp: new Date().toISOString(),
    };

    const newBackups = [backup, ...backups].slice(0, 10); // Хранить только последние 10 резервных копий
    setBackups(newBackups);
    localStorage.setItem('backups', JSON.stringify(newBackups));

    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(backup));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `backup_${moment().format('YYYY-MM-DD_HH-mm-ss')}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();

    message.success('Резервная копия успешно создана и сохранена');
  };

  const restoreBackup = (backup) => {
    Object.entries(backup.data).forEach(([key, value]) => {
      localStorage.setItem(key, JSON.stringify(value));
    });

    message.success('Данные успешно восстановлены из резервной копии');
    window.location.reload(); // Перезагрузка страницы для применения восстановленных данных
  };

  const handleFileUpload = (info) => {
    const { status } = info.file;
    if (status === 'done') {
      const reader = new FileReader();
      reader.onload = (e) => {
        const content = JSON.parse(e.target.result);
        restoreBackup(content);
      };
      reader.readAsText(info.file.originFileObj);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  const scheduleBackup = (date) => {
    const now = moment();
    const nextBackup = moment(date);
    
    if (nextBackup.isBefore(now)) {
      nextBackup.add(1, 'day');
    }

    const delay = nextBackup.diff(now);

    window.backupTimer = setTimeout(() => {
      saveBackup();
      scheduleBackup(date);
    }, delay);
  };

  const handleAutoBackupChange = (checked) => {
    setAutoBackup(checked);
    localStorage.setItem('autoBackup', checked);

    if (checked && backupInterval) {
      scheduleBackup(backupInterval);
    } else if (!checked && window.backupTimer) {
      clearTimeout(window.backupTimer);
    }
  };

  const handleBackupIntervalChange = (date) => {
    setBackupInterval(date);
    localStorage.setItem('backupInterval', date.format());

    if (autoBackup) {
      if (window.backupTimer) {
        clearTimeout(window.backupTimer);
      }
      scheduleBackup(date);
    }
  };

  return (
    <div className="save-update-settings">
      <h2>Сохранение и восстановление данных</h2>
      
      <Card title="Управление резервными копиями" style={{ marginBottom: 20 }}>
        <Button icon={<SaveOutlined />} onClick={saveBackup} style={{ marginRight: 10 }}>
          Создать резервную копию
        </Button>
        <Upload
          accept=".json"
          showUploadList={false}
          customRequest={({ file, onSuccess }) => {
            setTimeout(() => {
              onSuccess("ok");
            }, 0);
          }}
          onChange={handleFileUpload}
        >
          <Button icon={<UploadOutlined />}>
            Загрузить резервную копию
          </Button>
        </Upload>
      </Card>

      <Card title="Автоматическое резервное копирование" style={{ marginBottom: 20 }}>
        <Switch
          checked={autoBackup}
          onChange={handleAutoBackupChange}
          style={{ marginRight: 10 }}
        />
        <span style={{ marginRight: 10 }}>Включить автоматическое резервное копирование</span>
        <DatePicker
          format="HH:mm"
          value={backupInterval}
          onChange={handleBackupIntervalChange}
          picker="time"
          disabled={!autoBackup}
        />
      </Card>

      <Card title="Список резервных копий">
        <List
          dataSource={backups}
          renderItem={(item, index) => (
            <List.Item
              actions={[
                <Button icon={<RedoOutlined />} onClick={() => restoreBackup(item)}>
                  Восстановить
                </Button>,
                <Button icon={<DownloadOutlined />} onClick={() => {
                  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(item));
                  const downloadAnchorNode = document.createElement('a');
                  downloadAnchorNode.setAttribute("href", dataStr);
                  downloadAnchorNode.setAttribute("download", `backup_${moment(item.timestamp).format('YYYY-MM-DD_HH-mm-ss')}.json`);
                  document.body.appendChild(downloadAnchorNode);
                  downloadAnchorNode.click();
                  downloadAnchorNode.remove();
                }}>
                  Скачать
                </Button>
              ]}
            >
              <List.Item.Meta
                title={`Резервная копия от ${moment(item.timestamp).format('DD.MM.YYYY HH:mm:ss')}`}
                description={`Размер: ${JSON.stringify(item.data).length} байт`}
              />
            </List.Item>
          )}
        />
      </Card>
    </div>
  );
};

export default SaveUpdate;