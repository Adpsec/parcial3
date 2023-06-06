import firebase from "../firebase";

const db = firebase.collection("/musics");

class PhotosDataService {
    getAll() {
    return db;
}

create(photo) {
    return db.add(photo);
}

update(id, value) {
    return db.doc(id).update(value);
}

delete(id) {
    return db.doc(id).delete();
}
}

const musicDataService = new PhotosDataService();
export default musicDataService;