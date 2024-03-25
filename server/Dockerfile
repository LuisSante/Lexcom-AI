FROM python:3.10-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

ENV TZ=UTC

WORKDIR /app

RUN apt-get update && apt-get install -y \
    postgresql-client\
    && rm -rf /var/lib/apt/lists/*

COPY . .
RUN pip install --no-cache-dir -r requirements/requirements.txt
RUN pip install whitenoise[brotli]
RUN pip install gunicorn==21.2.0

ENV DJANGO_SETTINGS_MODULE=core.settings

CMD ["gunicorn", "core.wsgi:application", "--bind", "0.0.0.0:8080", "--workers", "1", "--threads", "8", "--timeout", "0"]