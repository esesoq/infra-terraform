import os
import json
import subprocess

def load_config(filename):
    try:
        with open(filename, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"Config file '{filename}' not found.")
        return None
    except json.JSONDecodeError as e:
        print(f"Failed to parse config file '{filename}': {e}")
        return None

def execute_terraform(working_dir, command):
    terraform_path = os.path.join(working_dir, 'terraform')
    if not os.path.exists(terraform_path):
        print(f"Terraform executable not found at '{terraform_path}'")
        return False
    subprocess.run([terraform_path, *command])

def main():
    config = load_config('config.json')
    if config is None:
        return

    working_dir = config.get('working_dir')
    if not os.path.exists(working_dir):
        print(f"Working dir '{working_dir}' does not exist.")
        return

    init_command = ['init']
    apply_command = ['apply', '-auto-approve']

    execute_terraform(working_dir, init_command)
    execute_terraform(working_dir, apply_command)

if __name__ == '__main__':
    main()