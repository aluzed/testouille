# Install Node with NVM
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.0/install.sh | bash
. ~/.nvm/nvm.sh
nvm install 10

npm install -g yarn

sudo mkdir /var/www
cd /var/www
sudo chmod 777 .
git clone https://github.com/aluzed/testouille test
cd /var/www/test

yarn install
sudo PORT=80 /home/ec2-user/.nvm/versions/node/v10.16.0/bin/node index.js 