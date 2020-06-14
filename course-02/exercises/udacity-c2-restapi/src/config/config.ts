export const config = {
  dev: {
    username: "udagramdev2",
    password: "udagramdev2",
    database: "udagramdev2",
    host: "udagramdev2.ccetwzrq1tjs.us-west-2.rds.amazonaws.com",
    dialect: "postgres",
    aws_region: "us-west-2",
    aws_profile: "default",
    aws_media_bucket: "udagram-friday-dev",
  },
  // postgres: {
  //   username: process.env.POSTGRES_USERNAME,
  //   password: process.env.POSTGRES_PASSWORD,
  //   database: process.env.POSTGRES_DATABASE,
  //   host: process.env.POSTGRES_HOST,
  //   dialect: "postgres",
  //   aws_region: process.env.AWS_REGION,
  //   aws_profile: process.env.AWS_PROFILE,
  //   aws_media_bucket: process.env.AWS_MEDIA_BUCKET,
  // },
};
