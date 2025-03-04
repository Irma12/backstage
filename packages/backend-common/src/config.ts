/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { findPaths } from '@backstage/cli-common';
import { loadConfig } from '@backstage/config-loader';

/**
 * Load configuration for a Backend
 */
export async function loadBackendConfig() {
  /* eslint-disable-next-line no-restricted-syntax */
  const paths = findPaths(__dirname);
  const configs = await loadConfig({
    env: process.env.NODE_ENV ?? 'development',
    rootPaths: [paths.targetRoot, paths.targetDir],
    shouldReadSecrets: true,
  });
  return configs;
}
