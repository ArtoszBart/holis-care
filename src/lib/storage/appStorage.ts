import AsyncStorage from '@react-native-async-storage/async-storage';
import * as SecureStore from 'expo-secure-store';
import { showToast } from '../../views/common/toast';
import { SECURE_KEYS, STORAGE_KEYS } from './keys';

const AppStorage = {
  async set(key: STORAGE_KEYS, value: unknown): Promise<void> {
    const json = JSON.stringify(value);
    try {
      if (isSecureKey(key)) {
        await SecureStore.setItemAsync(key, json);
      } else {
        await AsyncStorage.setItem(key, json);
      }
    } catch (e) {
      console.error(`Storage.setItem error for key "${key}":`, e);
    }
  },

  async get<T>(key: STORAGE_KEYS): Promise<T | null> {
    try {
      let json;
      if (isSecureKey(key)) {
        json = await SecureStore.getItemAsync(key);
      } else {
        json = await AsyncStorage.getItem(key);
      }

      return json ? (JSON.parse(json) as T) : null;
    } catch (e) {
      showToast('Wystąpił nieoczekiwany błąd');
      console.error(`Storage.getItem error for key "${key}":`, e);
      return null;
    }
  },

  async remove(key: STORAGE_KEYS): Promise<void> {
    try {
      if (isSecureKey(key)) {
        await SecureStore.deleteItemAsync(key);
      } else {
        await AsyncStorage.removeItem(key);
      }
    } catch (e) {
      console.error(`Storage.removeItem error for key "${key}":`, e);
    }
  },

  async removeAll(): Promise<void> {
    for (const key of SECURE_KEYS) {
      try {
        await SecureStore.deleteItemAsync(key);
      } catch (e) {
        console.error('Storage.removeAll SecureStore error:', e);
      }
    }

    try {
      await AsyncStorage.clear();
    } catch (e) {
      console.error('Storage.removeAll AsyncStorage error:', e);
    }
  },
};

const isSecureKey = (key: STORAGE_KEYS): boolean => {
  return SECURE_KEYS.has(key);
};

export default AppStorage;
