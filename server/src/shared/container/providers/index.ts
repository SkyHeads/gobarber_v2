import { container } from 'tsyringe';

import IStorageProvider from './StorageProvider/models/IStorageProvider';
import DisktStorageProvider from './StorageProvider/implementations/DisktStorageProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DisktStorageProvider,
);
