# aws_cloud_nine

aws configure list

export MYBUCKET="localcreatedbucket"

aws s3 mb s3://$MYBUCKET

echo "export MYBUCKET=$MYBUCKET" >> ~/.bashrc

aws s3 ls