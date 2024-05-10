FROM alpine

# Installs latest Chromium (100) package.
RUN apk add --no-cache \
      chromium \
      bash \
      nss \
      freetype \
      harfbuzz \
      ca-certificates \
      ttf-freefont \
      nodejs \
      npm

# Tell Puppeteer to skip installing Chrome. We'll be using the installed package.
ENV PUPPETEER_EXECUTABLE_PATH=/usr/bin/chromium-browser

# Add user so we don't need --no-sandbox.
RUN addgroup -S pptruser \
    && adduser -S -G pptruser pptruser \
    && mkdir -p /home/pptruser/Downloads /app/node_modules \
    && chown -R pptruser:pptruser /home/pptruser \
    && chown -R pptruser:pptruser /app

# Run everything after as non-privileged user.
USER pptruser

WORKDIR /app

COPY --chown=pptruser:pptruser . /app/
RUN npm install

# Copy entrypoint script
COPY --chown=pptruser:pptruser e2e/docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

ENTRYPOINT ["/entrypoint.sh", "$@"]
