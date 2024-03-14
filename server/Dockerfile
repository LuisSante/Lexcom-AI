FROM python:3.10-slim

ENV PYTHONUNBUFFERED True

ENV TZ=UTC

WORKDIR /app

COPY . .
RUN pip install --no-cache-dir -r requirements/requirements.txt
RUN pip install gunicorn

ENV DJANGO_SETTINGS_MODULE=webIA.settings
ENV PYTHONDONTWRITEBYCODE 1
ENV PYTHONUNBUFFERED 1

RUN python manage.py migrate

CMD exec gunicorn webIA.wsgi:application --bind :${PORT:-8080} --workers 1 --threads 8 --timeout 0

