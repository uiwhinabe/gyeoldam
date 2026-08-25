import { useState } from 'react'
import { initialNotificationSettings } from '../../data/mypageData.js'

function NotificationSettings() {
  const [settings, setSettings] = useState(initialNotificationSettings)
  const toggle = (id) => setSettings((current) => current.map((item) => item.id === id ? { ...item, enabled: !item.enabled } : item))

  return (
    <section className="mypage-detail-section" aria-labelledby="notification-title">
      <header className="mypage-detail-section__header"><p>NOTIFICATION</p><h2 id="notification-title">通知設定</h2></header>
      <div className="notification-settings">
        {settings.map((setting) => (
          <article key={setting.id}>
            <div><h3>{setting.label}</h3><p>{setting.description}</p></div>
            <button className={setting.enabled ? 'notification-switch--on' : ''} type="button" role="switch" aria-checked={setting.enabled} onClick={() => toggle(setting.id)}>
              <span aria-hidden="true" /><b>{setting.enabled ? 'ON' : 'OFF'}</b>
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}

export default NotificationSettings
