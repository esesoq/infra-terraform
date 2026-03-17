export enum TerraformVersion {
  v0_14_4 = 'v0.14.4',
  v0_15_0 = 'v0.15.0',
  v0_15_5 = 'v0.15.5',
  v0_15_6 = 'v0_15_6',
  v0_15_7 = 'v0.15.7',
  v0_15_8 = 'v0.15.8',
  v0_15_9 = 'v0.15.9',
  v0_16_0 = 'v0.16.0',
  v0_16_1 = 'v0.16.1'
}

export interface TerraformBackendConfig {
  backend: {
    default: string;
    lock: boolean;
  };
}

export interface TerraformConfig {
  required_providers: {
    [key: string]: {
      source: string;
      version?: string;
    };
  };
  terraform_version: TerraformVersion;
  backend: TerraformBackendConfig;
  variables: {
    [key: string]: string;
  };
}

export interface Provider {
  name: string;
  version: string;
}

export interface TerraformModule {
  source: string;
  version?: string;
  providers: Provider[];
  required_providers: {
    [key: string]: {
      source: string;
      version?: string;
    };
  };
}