# Kubernetes Database Backup

This project is meant to be used as a backup job in Kubernetes. The scope is to execute the backup (i.e. dump) of a given list of databases, writing them as files in the local filesystem and optionally store them in a provided storage service on cloud.

## Supported SQL Database engines:
- PostgreSQL 14
- MySQL (not available yet)
- Oracle (not available yet)

## Supported NoSQL Database engines:
- Mongo (not available yet)
- DynamoDB (not available yet)

## Supported storage services:
- Local filesystem
- Amazon S3 Bucket (not available yet)
- IBMCloud Object Storage (not available yet)
- Dropbox folder (not available yet)
- Google Drive folder (not available yet)