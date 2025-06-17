# Deployment Guide - Calculator Sarcina

This guide covers deployment options and configuration for the Calculator Sarcina application.

## Deployment Options

### Replit Deployment (Recommended)

The application is optimized for Replit deployment with automatic configuration.

**Prerequisites:**
- Replit account
- Project configured in Replit environment

**Steps:**
1. Ensure all environment variables are set
2. Click the "Deploy" button in Replit
3. Configure domain settings if needed
4. Monitor deployment status

**Environment Variables:**
```bash
NODE_ENV=production
PORT=5000
DATABASE_URL=postgresql://... (optional)
```

### Manual Server Deployment

For deploying to your own server infrastructure.

**System Requirements:**
- Node.js 20 or higher
- PostgreSQL 12+ (optional)
- Reverse proxy (nginx recommended)
- SSL certificate

**Deployment Steps:**

1. **Server Setup:**
```bash
# Update system
sudo apt update && sudo apt upgrade -y

# Install Node.js 20
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PostgreSQL (optional)
sudo apt install postgresql postgresql-contrib
```

2. **Application Deployment:**
```bash
# Clone repository
git clone <repository-url>
cd calculator-sarcina

# Install dependencies
npm install

# Build application
npm run build

# Start production server
NODE_ENV=production npm start
```

3. **Process Management:**
```bash
# Install PM2 for process management
npm install -g pm2

# Start application with PM2
pm2 start dist/index.js --name calculator-sarcina

# Configure PM2 to start on boot
pm2 startup
pm2 save
```

### Docker Deployment

Containerized deployment for consistent environments.

**Dockerfile:**
```dockerfile
FROM node:20-alpine

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build application
RUN npm run build

# Expose port
EXPOSE 5000

# Start application
CMD ["npm", "start"]
```

**Docker Compose:**
```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - "5000:5000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=${DATABASE_URL}
    depends_on:
      - postgres
    
  postgres:
    image: postgres:16
    environment:
      - POSTGRES_DB=pension_calculator
      - POSTGRES_USER=${POSTGRES_USER}
      - POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## Environment Configuration

### Production Environment Variables

**Required:**
```bash
NODE_ENV=production
PORT=5000
```

**Optional:**
```bash
# Database connection
DATABASE_URL=postgresql://user:password@host:port/database

# Security
SESSION_SECRET=your-secure-session-secret

# External services
ANALYTICS_KEY=your-analytics-key
```

### Development vs Production

**Development:**
- Uses Vite dev server for frontend
- In-memory storage by default
- Hot reloading enabled
- Detailed error messages

**Production:**
- Serves static files from Express
- PostgreSQL database connection
- Optimized builds
- Error logging and monitoring

## Database Setup

### PostgreSQL Configuration

1. **Database Creation:**
```sql
CREATE DATABASE calculator_sarcina;
CREATE USER sarcina_user WITH PASSWORD 'secure_password';
GRANT ALL PRIVILEGES ON DATABASE calculator_sarcina TO sarcina_user;
```

2. **Run Migrations:**
```bash
npm run db:generate
npm run db:migrate
```

3. **Verify Connection:**
```bash
npm run db:studio
```

### Database Backup

**Automated Backups:**
```bash
# Create backup script
#!/bin/bash
DATE=$(date +%Y%m%d_%H%M%S)
pg_dump $DATABASE_URL > backup_$DATE.sql

# Schedule with cron
0 2 * * * /path/to/backup-script.sh
```

## SSL/HTTPS Configuration

### Let's Encrypt with Certbot

```bash
# Install certbot
sudo apt install certbot python3-certbot-nginx

# Obtain certificate
sudo certbot --nginx -d calculatorsarcina.com

# Auto-renewal
sudo crontab -e
0 12 * * * /usr/bin/certbot renew --quiet
```

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name calculatorsarcina.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name calculatorsarcina.com;

    ssl_certificate /etc/letsencrypt/live/calculatorsarcina.com/fullchain.pem;
    ssl_certificate_key /etc/letsencrypt/live/calculatorsarcina.com/privkey.pem;

    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

## Monitoring and Logging

### Application Monitoring

**Health Check Endpoint:**
```typescript
// Add to server/routes.ts
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});
```

**Performance Monitoring:**
```bash
# Install monitoring tools
npm install --save express-rate-limit helmet compression

# Configure in server
app.use(helmet());
app.use(compression());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
}));
```

### Log Management

**Structured Logging:**
```bash
npm install --save winston

# Configure logging
const winston = require('winston');
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});
```

## Performance Optimization

### Production Build Optimization

**Build Configuration:**
```json
{
  "scripts": {
    "build": "vite build",
    "build:server": "esbuild server/index.ts --bundle --platform=node --outfile=dist/index.js"
  }
}
```

**Static Asset Optimization:**
- Enable gzip compression
- Set proper cache headers
- Optimize images and fonts
- Minimize bundle sizes

### CDN Configuration

For better performance, serve static assets from CDN:

```typescript
// Configure static asset serving
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('dist/public', {
    maxAge: '1y',
    etag: false
  }));
}
```

## Security Checklist

### Pre-Deployment Security

- [ ] Environment variables are secure
- [ ] Database credentials are protected
- [ ] HTTPS is configured
- [ ] Security headers are implemented
- [ ] Input validation is comprehensive
- [ ] Rate limiting is configured
- [ ] Error messages don't expose sensitive data

### Security Headers

```typescript
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "fonts.googleapis.com"],
      fontSrc: ["'self'", "fonts.gstatic.com"],
      imgSrc: ["'self'", "data:", "https:"],
      scriptSrc: ["'self'"]
    }
  },
  hsts: {
    maxAge: 31536000,
    includeSubDomains: true,
    preload: true
  }
}));
```

## Troubleshooting

### Common Issues

**Build Failures:**
- Check Node.js version compatibility
- Verify all dependencies are installed
- Review TypeScript compilation errors

**Database Connection Issues:**
- Verify DATABASE_URL format
- Check network connectivity
- Ensure database server is running

**Performance Issues:**
- Monitor server resources
- Check database query performance
- Review application logs

### Diagnostic Commands

```bash
# Check application health
curl https://your-domain.com/health

# Monitor system resources
htop
df -h

# Check application logs
tail -f /var/log/pension-calculator.log

# Test database connection
psql $DATABASE_URL -c "SELECT 1;"
```

## Rollback Procedures

### Application Rollback

```bash
# Using PM2
pm2 stop pension-calculator
git checkout previous-stable-tag
npm install
npm run build
pm2 start dist/index.js

# Using Docker
docker-compose down
docker-compose up -d --build
```

### Database Rollback

```bash
# Restore from backup
psql $DATABASE_URL < backup_YYYYMMDD_HHMMSS.sql

# Run migration rollback
npm run db:migrate:down
```

---

*This deployment guide covers standard deployment scenarios. For specific hosting providers, consult their documentation for platform-specific configurations.*