provider "aws" {
  region                  = "eu-west-3"
  shared_credentials_file = "/home/aluzed/.aws/credentials"
  profile                 = "aluzed"
}

resource "aws_security_group" "my_sg" {
  name = "my_sg"

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 80
    to_port     = 80
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  # Allow outgoing traffic to anywhere.
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }
}


resource "aws_instance" "web" {
  ami = "ami-0478f54f767ff4062"
  instance_type = "t2.micro"
  key_name = "deployer"
  security_groups = ["${aws_security_group.my_sg.name}"]
  tags = {
    Name = "testouille-serv"
  }

  provisioner "file" {
    source      = "installer.sh"
    destination = "/tmp/installer.sh"
  }

  provisioner "remote-exec" {
    inline = [
      "chmod +x /tmp/installer.sh",
      "/tmp/installer.sh",
    ]
  }

}