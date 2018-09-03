/**
 * static
 * 只可以通过类名.来获取，new实例化之后无法获取
 * Resource.genUUID
 */

class Resource {
  constructor () {
    this._id = '';
  }

  static genUUID(oriThirdPartId) {

  }

  static getIdByUUID() {

  }

  static getUUIDByID() {

  }
}

class DoubanNoteResource extends Resource {
  constructor () {
    super();
  }

  static get['UUID_PREF'] () {
    return `https://douban.com/note/`;
  }

  static genUUID(oriThirdpartyId) {
    return `${DoubanNoteResource.UUID_PREF}${oriThirdpartyId}`;
  }

  static getOriginalThirdPartyId(UUID) {
    return UUID.split(DoubanNoteResource.UUID_PREF)[1];
  }

  static getIdByUUID(UUID) {
    return UUID;
  }

  static getUUIDByID(ID) {
    return ID;
  }
}
