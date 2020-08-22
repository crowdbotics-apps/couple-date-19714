import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
function* api_v1_customtext_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_list, action)
    yield put(actions.api_v1_customtext_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_listFailed(err))
  }
}
function* api_v1_customtext_listWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_LIST, api_v1_customtext_listWorker)
}
function* api_v1_customtext_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_read, action)
    yield put(actions.api_v1_customtext_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_readFailed(err))
  }
}
function* api_v1_customtext_readWatcher() {
  yield takeEvery(types.API_V1_CUSTOMTEXT_READ, api_v1_customtext_readWorker)
}
function* api_v1_customtext_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_customtext_update, action)
    yield put(actions.api_v1_customtext_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_updateFailed(err))
  }
}
function* api_v1_customtext_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_UPDATE,
    api_v1_customtext_updateWorker
  )
}
function* api_v1_customtext_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_customtext_partial_update,
      action
    )
    yield put(actions.api_v1_customtext_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_customtext_partial_updateFailed(err))
  }
}
function* api_v1_customtext_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE,
    api_v1_customtext_partial_updateWorker
  )
}
function* api_v1_dislike_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dislike_list, action)
    yield put(actions.api_v1_dislike_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_dislike_listFailed(err))
  }
}
function* api_v1_dislike_listWatcher() {
  yield takeEvery(types.API_V1_DISLIKE_LIST, api_v1_dislike_listWorker)
}
function* api_v1_dislike_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dislike_create, action)
    yield put(actions.api_v1_dislike_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_dislike_createFailed(err))
  }
}
function* api_v1_dislike_createWatcher() {
  yield takeEvery(types.API_V1_DISLIKE_CREATE, api_v1_dislike_createWorker)
}
function* api_v1_dislike_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dislike_read, action)
    yield put(actions.api_v1_dislike_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_dislike_readFailed(err))
  }
}
function* api_v1_dislike_readWatcher() {
  yield takeEvery(types.API_V1_DISLIKE_READ, api_v1_dislike_readWorker)
}
function* api_v1_dislike_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dislike_update, action)
    yield put(actions.api_v1_dislike_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_dislike_updateFailed(err))
  }
}
function* api_v1_dislike_updateWatcher() {
  yield takeEvery(types.API_V1_DISLIKE_UPDATE, api_v1_dislike_updateWorker)
}
function* api_v1_dislike_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dislike_partial_update, action)
    yield put(actions.api_v1_dislike_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_dislike_partial_updateFailed(err))
  }
}
function* api_v1_dislike_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_DISLIKE_PARTIAL_UPDATE,
    api_v1_dislike_partial_updateWorker
  )
}
function* api_v1_dislike_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_dislike_delete, action)
    yield put(actions.api_v1_dislike_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_dislike_deleteFailed(err))
  }
}
function* api_v1_dislike_deleteWatcher() {
  yield takeEvery(types.API_V1_DISLIKE_DELETE, api_v1_dislike_deleteWorker)
}
function* api_v1_homepage_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_list, action)
    yield put(actions.api_v1_homepage_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_listFailed(err))
  }
}
function* api_v1_homepage_listWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_LIST, api_v1_homepage_listWorker)
}
function* api_v1_homepage_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_read, action)
    yield put(actions.api_v1_homepage_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_readFailed(err))
  }
}
function* api_v1_homepage_readWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_READ, api_v1_homepage_readWorker)
}
function* api_v1_homepage_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_update, action)
    yield put(actions.api_v1_homepage_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_updateFailed(err))
  }
}
function* api_v1_homepage_updateWatcher() {
  yield takeEvery(types.API_V1_HOMEPAGE_UPDATE, api_v1_homepage_updateWorker)
}
function* api_v1_homepage_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_homepage_partial_update, action)
    yield put(actions.api_v1_homepage_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_homepage_partial_updateFailed(err))
  }
}
function* api_v1_homepage_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_HOMEPAGE_PARTIAL_UPDATE,
    api_v1_homepage_partial_updateWorker
  )
}
function* api_v1_inbox_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_inbox_list, action)
    yield put(actions.api_v1_inbox_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_inbox_listFailed(err))
  }
}
function* api_v1_inbox_listWatcher() {
  yield takeEvery(types.API_V1_INBOX_LIST, api_v1_inbox_listWorker)
}
function* api_v1_inbox_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_inbox_create, action)
    yield put(actions.api_v1_inbox_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_inbox_createFailed(err))
  }
}
function* api_v1_inbox_createWatcher() {
  yield takeEvery(types.API_V1_INBOX_CREATE, api_v1_inbox_createWorker)
}
function* api_v1_inbox_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_inbox_read, action)
    yield put(actions.api_v1_inbox_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_inbox_readFailed(err))
  }
}
function* api_v1_inbox_readWatcher() {
  yield takeEvery(types.API_V1_INBOX_READ, api_v1_inbox_readWorker)
}
function* api_v1_inbox_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_inbox_update, action)
    yield put(actions.api_v1_inbox_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_inbox_updateFailed(err))
  }
}
function* api_v1_inbox_updateWatcher() {
  yield takeEvery(types.API_V1_INBOX_UPDATE, api_v1_inbox_updateWorker)
}
function* api_v1_inbox_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_inbox_partial_update, action)
    yield put(actions.api_v1_inbox_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_inbox_partial_updateFailed(err))
  }
}
function* api_v1_inbox_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_INBOX_PARTIAL_UPDATE,
    api_v1_inbox_partial_updateWorker
  )
}
function* api_v1_inbox_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_inbox_delete, action)
    yield put(actions.api_v1_inbox_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_inbox_deleteFailed(err))
  }
}
function* api_v1_inbox_deleteWatcher() {
  yield takeEvery(types.API_V1_INBOX_DELETE, api_v1_inbox_deleteWorker)
}
function* api_v1_like_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_like_list, action)
    yield put(actions.api_v1_like_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_like_listFailed(err))
  }
}
function* api_v1_like_listWatcher() {
  yield takeEvery(types.API_V1_LIKE_LIST, api_v1_like_listWorker)
}
function* api_v1_like_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_like_create, action)
    yield put(actions.api_v1_like_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_like_createFailed(err))
  }
}
function* api_v1_like_createWatcher() {
  yield takeEvery(types.API_V1_LIKE_CREATE, api_v1_like_createWorker)
}
function* api_v1_like_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_like_read, action)
    yield put(actions.api_v1_like_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_like_readFailed(err))
  }
}
function* api_v1_like_readWatcher() {
  yield takeEvery(types.API_V1_LIKE_READ, api_v1_like_readWorker)
}
function* api_v1_like_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_like_update, action)
    yield put(actions.api_v1_like_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_like_updateFailed(err))
  }
}
function* api_v1_like_updateWatcher() {
  yield takeEvery(types.API_V1_LIKE_UPDATE, api_v1_like_updateWorker)
}
function* api_v1_like_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_like_partial_update, action)
    yield put(actions.api_v1_like_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_like_partial_updateFailed(err))
  }
}
function* api_v1_like_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_LIKE_PARTIAL_UPDATE,
    api_v1_like_partial_updateWorker
  )
}
function* api_v1_like_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_like_delete, action)
    yield put(actions.api_v1_like_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_like_deleteFailed(err))
  }
}
function* api_v1_like_deleteWatcher() {
  yield takeEvery(types.API_V1_LIKE_DELETE, api_v1_like_deleteWorker)
}
function* api_v1_login_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_login_create, action)
    yield put(actions.api_v1_login_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_login_createFailed(err))
  }
}
function* api_v1_login_createWatcher() {
  yield takeEvery(types.API_V1_LOGIN_CREATE, api_v1_login_createWorker)
}
function* api_v1_match_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_match_list, action)
    yield put(actions.api_v1_match_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_match_listFailed(err))
  }
}
function* api_v1_match_listWatcher() {
  yield takeEvery(types.API_V1_MATCH_LIST, api_v1_match_listWorker)
}
function* api_v1_match_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_match_create, action)
    yield put(actions.api_v1_match_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_match_createFailed(err))
  }
}
function* api_v1_match_createWatcher() {
  yield takeEvery(types.API_V1_MATCH_CREATE, api_v1_match_createWorker)
}
function* api_v1_match_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_match_read, action)
    yield put(actions.api_v1_match_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_match_readFailed(err))
  }
}
function* api_v1_match_readWatcher() {
  yield takeEvery(types.API_V1_MATCH_READ, api_v1_match_readWorker)
}
function* api_v1_match_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_match_update, action)
    yield put(actions.api_v1_match_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_match_updateFailed(err))
  }
}
function* api_v1_match_updateWatcher() {
  yield takeEvery(types.API_V1_MATCH_UPDATE, api_v1_match_updateWorker)
}
function* api_v1_match_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_match_partial_update, action)
    yield put(actions.api_v1_match_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_match_partial_updateFailed(err))
  }
}
function* api_v1_match_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_MATCH_PARTIAL_UPDATE,
    api_v1_match_partial_updateWorker
  )
}
function* api_v1_match_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_match_delete, action)
    yield put(actions.api_v1_match_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_match_deleteFailed(err))
  }
}
function* api_v1_match_deleteWatcher() {
  yield takeEvery(types.API_V1_MATCH_DELETE, api_v1_match_deleteWorker)
}
function* api_v1_message_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_list, action)
    yield put(actions.api_v1_message_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_listFailed(err))
  }
}
function* api_v1_message_listWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_LIST, api_v1_message_listWorker)
}
function* api_v1_message_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_create, action)
    yield put(actions.api_v1_message_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_createFailed(err))
  }
}
function* api_v1_message_createWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_CREATE, api_v1_message_createWorker)
}
function* api_v1_message_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_read, action)
    yield put(actions.api_v1_message_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_readFailed(err))
  }
}
function* api_v1_message_readWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_READ, api_v1_message_readWorker)
}
function* api_v1_message_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_update, action)
    yield put(actions.api_v1_message_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_updateFailed(err))
  }
}
function* api_v1_message_updateWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_UPDATE, api_v1_message_updateWorker)
}
function* api_v1_message_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_partial_update, action)
    yield put(actions.api_v1_message_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_partial_updateFailed(err))
  }
}
function* api_v1_message_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_MESSAGE_PARTIAL_UPDATE,
    api_v1_message_partial_updateWorker
  )
}
function* api_v1_message_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_message_delete, action)
    yield put(actions.api_v1_message_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_message_deleteFailed(err))
  }
}
function* api_v1_message_deleteWatcher() {
  yield takeEvery(types.API_V1_MESSAGE_DELETE, api_v1_message_deleteWorker)
}
function* api_v1_profile_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_list, action)
    yield put(actions.api_v1_profile_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_listFailed(err))
  }
}
function* api_v1_profile_listWatcher() {
  yield takeEvery(types.API_V1_PROFILE_LIST, api_v1_profile_listWorker)
}
function* api_v1_profile_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_create, action)
    yield put(actions.api_v1_profile_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_createFailed(err))
  }
}
function* api_v1_profile_createWatcher() {
  yield takeEvery(types.API_V1_PROFILE_CREATE, api_v1_profile_createWorker)
}
function* api_v1_profile_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_read, action)
    yield put(actions.api_v1_profile_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_readFailed(err))
  }
}
function* api_v1_profile_readWatcher() {
  yield takeEvery(types.API_V1_PROFILE_READ, api_v1_profile_readWorker)
}
function* api_v1_profile_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_update, action)
    yield put(actions.api_v1_profile_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_updateFailed(err))
  }
}
function* api_v1_profile_updateWatcher() {
  yield takeEvery(types.API_V1_PROFILE_UPDATE, api_v1_profile_updateWorker)
}
function* api_v1_profile_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_partial_update, action)
    yield put(actions.api_v1_profile_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_partial_updateFailed(err))
  }
}
function* api_v1_profile_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_PROFILE_PARTIAL_UPDATE,
    api_v1_profile_partial_updateWorker
  )
}
function* api_v1_profile_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_profile_delete, action)
    yield put(actions.api_v1_profile_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_profile_deleteFailed(err))
  }
}
function* api_v1_profile_deleteWatcher() {
  yield takeEvery(types.API_V1_PROFILE_DELETE, api_v1_profile_deleteWorker)
}
function* api_v1_setting_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_setting_list, action)
    yield put(actions.api_v1_setting_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_setting_listFailed(err))
  }
}
function* api_v1_setting_listWatcher() {
  yield takeEvery(types.API_V1_SETTING_LIST, api_v1_setting_listWorker)
}
function* api_v1_setting_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_setting_create, action)
    yield put(actions.api_v1_setting_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_setting_createFailed(err))
  }
}
function* api_v1_setting_createWatcher() {
  yield takeEvery(types.API_V1_SETTING_CREATE, api_v1_setting_createWorker)
}
function* api_v1_setting_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_setting_read, action)
    yield put(actions.api_v1_setting_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_setting_readFailed(err))
  }
}
function* api_v1_setting_readWatcher() {
  yield takeEvery(types.API_V1_SETTING_READ, api_v1_setting_readWorker)
}
function* api_v1_setting_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_setting_update, action)
    yield put(actions.api_v1_setting_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_setting_updateFailed(err))
  }
}
function* api_v1_setting_updateWatcher() {
  yield takeEvery(types.API_V1_SETTING_UPDATE, api_v1_setting_updateWorker)
}
function* api_v1_setting_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_setting_partial_update, action)
    yield put(actions.api_v1_setting_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_setting_partial_updateFailed(err))
  }
}
function* api_v1_setting_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_SETTING_PARTIAL_UPDATE,
    api_v1_setting_partial_updateWorker
  )
}
function* api_v1_setting_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_setting_delete, action)
    yield put(actions.api_v1_setting_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_setting_deleteFailed(err))
  }
}
function* api_v1_setting_deleteWatcher() {
  yield takeEvery(types.API_V1_SETTING_DELETE, api_v1_setting_deleteWorker)
}
function* api_v1_signup_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_signup_create, action)
    yield put(actions.api_v1_signup_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_signup_createFailed(err))
  }
}
function* api_v1_signup_createWatcher() {
  yield takeEvery(types.API_V1_SIGNUP_CREATE, api_v1_signup_createWorker)
}
function* api_v1_userphoto_listWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userphoto_list, action)
    yield put(actions.api_v1_userphoto_listSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userphoto_listFailed(err))
  }
}
function* api_v1_userphoto_listWatcher() {
  yield takeEvery(types.API_V1_USERPHOTO_LIST, api_v1_userphoto_listWorker)
}
function* api_v1_userphoto_createWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userphoto_create, action)
    yield put(actions.api_v1_userphoto_createSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userphoto_createFailed(err))
  }
}
function* api_v1_userphoto_createWatcher() {
  yield takeEvery(types.API_V1_USERPHOTO_CREATE, api_v1_userphoto_createWorker)
}
function* api_v1_userphoto_readWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userphoto_read, action)
    yield put(actions.api_v1_userphoto_readSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userphoto_readFailed(err))
  }
}
function* api_v1_userphoto_readWatcher() {
  yield takeEvery(types.API_V1_USERPHOTO_READ, api_v1_userphoto_readWorker)
}
function* api_v1_userphoto_updateWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userphoto_update, action)
    yield put(actions.api_v1_userphoto_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userphoto_updateFailed(err))
  }
}
function* api_v1_userphoto_updateWatcher() {
  yield takeEvery(types.API_V1_USERPHOTO_UPDATE, api_v1_userphoto_updateWorker)
}
function* api_v1_userphoto_partial_updateWorker(action) {
  try {
    const result = yield call(
      apiService.api_v1_userphoto_partial_update,
      action
    )
    yield put(actions.api_v1_userphoto_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userphoto_partial_updateFailed(err))
  }
}
function* api_v1_userphoto_partial_updateWatcher() {
  yield takeEvery(
    types.API_V1_USERPHOTO_PARTIAL_UPDATE,
    api_v1_userphoto_partial_updateWorker
  )
}
function* api_v1_userphoto_deleteWorker(action) {
  try {
    const result = yield call(apiService.api_v1_userphoto_delete, action)
    yield put(actions.api_v1_userphoto_deleteSucceeded(result))
  } catch (err) {
    yield put(actions.api_v1_userphoto_deleteFailed(err))
  }
}
function* api_v1_userphoto_deleteWatcher() {
  yield takeEvery(types.API_V1_USERPHOTO_DELETE, api_v1_userphoto_deleteWorker)
}
function* rest_auth_login_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_login_create, action)
    yield put(actions.rest_auth_login_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_login_createFailed(err))
  }
}
function* rest_auth_login_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGIN_CREATE, rest_auth_login_createWorker)
}
function* rest_auth_logout_listWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_list, action)
    yield put(actions.rest_auth_logout_listSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_logout_listFailed(err))
  }
}
function* rest_auth_logout_listWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_LIST, rest_auth_logout_listWorker)
}
function* rest_auth_logout_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_logout_create, action)
    yield put(actions.rest_auth_logout_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_logout_createFailed(err))
  }
}
function* rest_auth_logout_createWatcher() {
  yield takeEvery(types.REST_AUTH_LOGOUT_CREATE, rest_auth_logout_createWorker)
}
function* rest_auth_password_change_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_change_create,
      action
    )
    yield put(actions.rest_auth_password_change_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_change_createFailed(err))
  }
}
function* rest_auth_password_change_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_CHANGE_CREATE,
    rest_auth_password_change_createWorker
  )
}
function* rest_auth_password_reset_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_create,
      action
    )
    yield put(actions.rest_auth_password_reset_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_createFailed(err))
  }
}
function* rest_auth_password_reset_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CREATE,
    rest_auth_password_reset_createWorker
  )
}
function* rest_auth_password_reset_confirm_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_password_reset_confirm_create,
      action
    )
    yield put(actions.rest_auth_password_reset_confirm_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_password_reset_confirm_createFailed(err))
  }
}
function* rest_auth_password_reset_confirm_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE,
    rest_auth_password_reset_confirm_createWorker
  )
}
function* rest_auth_registration_createWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_registration_create, action)
    yield put(actions.rest_auth_registration_createSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_registration_createFailed(err))
  }
}
function* rest_auth_registration_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_CREATE,
    rest_auth_registration_createWorker
  )
}
function* rest_auth_registration_verify_email_createWorker(action) {
  try {
    const result = yield call(
      apiService.rest_auth_registration_verify_email_create,
      action
    )
    yield put(
      actions.rest_auth_registration_verify_email_createSucceeded(result)
    )
  } catch (err) {
    yield put(actions.rest_auth_registration_verify_email_createFailed(err))
  }
}
function* rest_auth_registration_verify_email_createWatcher() {
  yield takeEvery(
    types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE,
    rest_auth_registration_verify_email_createWorker
  )
}
function* rest_auth_user_readWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_read, action)
    yield put(actions.rest_auth_user_readSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_readFailed(err))
  }
}
function* rest_auth_user_readWatcher() {
  yield takeEvery(types.REST_AUTH_USER_READ, rest_auth_user_readWorker)
}
function* rest_auth_user_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_update, action)
    yield put(actions.rest_auth_user_updateSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_updateFailed(err))
  }
}
function* rest_auth_user_updateWatcher() {
  yield takeEvery(types.REST_AUTH_USER_UPDATE, rest_auth_user_updateWorker)
}
function* rest_auth_user_partial_updateWorker(action) {
  try {
    const result = yield call(apiService.rest_auth_user_partial_update, action)
    yield put(actions.rest_auth_user_partial_updateSucceeded(result))
  } catch (err) {
    yield put(actions.rest_auth_user_partial_updateFailed(err))
  }
}
function* rest_auth_user_partial_updateWatcher() {
  yield takeEvery(
    types.REST_AUTH_USER_PARTIAL_UPDATE,
    rest_auth_user_partial_updateWorker
  )
}
export default function* rootSaga() {
  const sagas = [
    api_v1_customtext_listWatcher,
    api_v1_customtext_readWatcher,
    api_v1_customtext_updateWatcher,
    api_v1_customtext_partial_updateWatcher,
    api_v1_dislike_listWatcher,
    api_v1_dislike_createWatcher,
    api_v1_dislike_readWatcher,
    api_v1_dislike_updateWatcher,
    api_v1_dislike_partial_updateWatcher,
    api_v1_dislike_deleteWatcher,
    api_v1_homepage_listWatcher,
    api_v1_homepage_readWatcher,
    api_v1_homepage_updateWatcher,
    api_v1_homepage_partial_updateWatcher,
    api_v1_inbox_listWatcher,
    api_v1_inbox_createWatcher,
    api_v1_inbox_readWatcher,
    api_v1_inbox_updateWatcher,
    api_v1_inbox_partial_updateWatcher,
    api_v1_inbox_deleteWatcher,
    api_v1_like_listWatcher,
    api_v1_like_createWatcher,
    api_v1_like_readWatcher,
    api_v1_like_updateWatcher,
    api_v1_like_partial_updateWatcher,
    api_v1_like_deleteWatcher,
    api_v1_login_createWatcher,
    api_v1_match_listWatcher,
    api_v1_match_createWatcher,
    api_v1_match_readWatcher,
    api_v1_match_updateWatcher,
    api_v1_match_partial_updateWatcher,
    api_v1_match_deleteWatcher,
    api_v1_message_listWatcher,
    api_v1_message_createWatcher,
    api_v1_message_readWatcher,
    api_v1_message_updateWatcher,
    api_v1_message_partial_updateWatcher,
    api_v1_message_deleteWatcher,
    api_v1_profile_listWatcher,
    api_v1_profile_createWatcher,
    api_v1_profile_readWatcher,
    api_v1_profile_updateWatcher,
    api_v1_profile_partial_updateWatcher,
    api_v1_profile_deleteWatcher,
    api_v1_setting_listWatcher,
    api_v1_setting_createWatcher,
    api_v1_setting_readWatcher,
    api_v1_setting_updateWatcher,
    api_v1_setting_partial_updateWatcher,
    api_v1_setting_deleteWatcher,
    api_v1_signup_createWatcher,
    api_v1_userphoto_listWatcher,
    api_v1_userphoto_createWatcher,
    api_v1_userphoto_readWatcher,
    api_v1_userphoto_updateWatcher,
    api_v1_userphoto_partial_updateWatcher,
    api_v1_userphoto_deleteWatcher,
    rest_auth_login_createWatcher,
    rest_auth_logout_listWatcher,
    rest_auth_logout_createWatcher,
    rest_auth_password_change_createWatcher,
    rest_auth_password_reset_createWatcher,
    rest_auth_password_reset_confirm_createWatcher,
    rest_auth_registration_createWatcher,
    rest_auth_registration_verify_email_createWatcher,
    rest_auth_user_readWatcher,
    rest_auth_user_updateWatcher,
    rest_auth_user_partial_updateWatcher
  ]
  yield all(
    sagas.map(saga =>
      spawn(function*() {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
