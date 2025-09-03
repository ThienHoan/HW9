module.exports = {
  apps: [{
    name: 'hw9-backend',
    script: './backend/dist/server.js',
    cwd: '/var/www/hw9',
    instances: 1,
    exec_mode: 'fork',
    env: {
      NODE_ENV: 'production',
      PORT: 3001
    },
    error_file: '/var/log/pm2/hw9-backend-error.log',
    out_file: '/var/log/pm2/hw9-backend-out.log',
    log_file: '/var/log/pm2/hw9-backend.log',
    time: true
  }]
}
