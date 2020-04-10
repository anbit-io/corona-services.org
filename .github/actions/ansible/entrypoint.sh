#!/bin/sh

mkdir ~/.ssh
chmod 0700 ~/.ssh
echo "$SSH_PRIVATE_KEY" > ~/.ssh/id_rsa
chmod 0600 ~/.ssh/id_rsa
[[ -f /.dockerenv ]] && echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config

cd deploy
export SSH_USER=$SSH_USER
export ANSIBLE_CONFIG=./ansible.cfg
ansible-playbook deploy.yml -e env=production