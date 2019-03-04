# fcm-http-oauth
Generate oauth key using your service account for authorizing requests to FCM app server

## Create Service Account

In your firebase project, under project settings, choose `Service accounts` tab.

Select `Generate new private key` to download your service account file.

## Install Dependencies

```
npm install
```

## Generate OAuth

```
npm run oauth <absolute_path_of_your_service_account_file>

e.g. npm run oauth C:\\firebase-adminsdk.json
```