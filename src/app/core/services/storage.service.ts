import { Injectable } from '@angular/core';
import { getDownloadURL, ref, Storage, uploadBytes, UploadResult } from '@angular/fire/storage';
import { StorageReference } from '@firebase/storage';
import { IMAGES_BASE_PATH } from '@shared/constants/storage.constants';

@Injectable({
  providedIn: 'root',
})
export class StorageService {

  constructor(private storage: Storage) {
  }

  public uploadImage(file: File): Promise<string> {
    return this.uploadFile(ref(this.storage, `${IMAGES_BASE_PATH}/${file.name}`), file);
  }

  private uploadFile(ref: StorageReference, file: File): Promise<string> {
    return uploadBytes(ref, file)
      .then((uploadResult: UploadResult) => getDownloadURL(uploadResult.ref));
  }
}
