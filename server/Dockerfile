FROM python:3.10-slim

ENV PYTHONDONTWRITEBYCODE 1
ENV PYTHONUNBUFFERED 1

ENV TZ=UTC

WORKDIR /app

RUN apt-get update && apt-get install -y \
    postgresql-client mime-support \
    && rm -rf /var/lib/apt/lists/*

COPY . .
RUN pip install --no-cache-dir -r requirements/requirements.txt
RUN pip install whitenoise[brotli]
RUN pip install gunicorn==21.2.0

ENV DJANGO_SETTINGS_MODULE=core.settings

CMD exec gunicorn core.wsgi:application --bind 0.0.0.0:${PORT:-8000} --workers 1 --threads 8 --timeout 0