# Test

This is a test project.

# Requirements

Using Node.js >= 10 for jest compatibility.

# Tests

With Jest installed : 

```bash
jest
```

# Config

To change default port, update `config.js` file.

# Deploy

Create `~/.aws/credentials` file with : 

```
[default]
aws_access_id = <ACCESSKEY>
aws_secret_access_key = <SECRET>
```

exports ->

```
export AWS_ACCESS_KEY_ID=<ACCESSKEY>
export AWS_SECRET_ACCESS_KEY=<SECRET>
```