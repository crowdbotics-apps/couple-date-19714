import axios from "axios"
const coupleDateAPI = axios.create({
  baseURL: "https://couple-date-19714.botics.co/",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_v1_customtext_list() {
  return coupleDateAPI.get(`/api/v1/customtext/`)
}
function api_v1_customtext_read() {
  return coupleDateAPI.get(`/api/v1/customtext/{id}/`)
}
function api_v1_customtext_update(requestBody) {
  return coupleDateAPI.put(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_customtext_partial_update(requestBody) {
  return coupleDateAPI.patch(`/api/v1/customtext/{id}/`, requestBody)
}
function api_v1_dislike_list() {
  return coupleDateAPI.get(`/api/v1/dislike/`)
}
function api_v1_dislike_create(requestBody) {
  return coupleDateAPI.post(`/api/v1/dislike/`, requestBody)
}
function api_v1_dislike_read() {
  return coupleDateAPI.get(`/api/v1/dislike/{id}/`)
}
function api_v1_dislike_update(requestBody) {
  return coupleDateAPI.put(`/api/v1/dislike/{id}/`, requestBody)
}
function api_v1_dislike_partial_update(requestBody) {
  return coupleDateAPI.patch(`/api/v1/dislike/{id}/`, requestBody)
}
function api_v1_dislike_delete() {
  return coupleDateAPI.delete(`/api/v1/dislike/{id}/`)
}
function api_v1_homepage_list() {
  return coupleDateAPI.get(`/api/v1/homepage/`)
}
function api_v1_homepage_read() {
  return coupleDateAPI.get(`/api/v1/homepage/{id}/`)
}
function api_v1_homepage_update(requestBody) {
  return coupleDateAPI.put(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_homepage_partial_update(requestBody) {
  return coupleDateAPI.patch(`/api/v1/homepage/{id}/`, requestBody)
}
function api_v1_inbox_list() {
  return coupleDateAPI.get(`/api/v1/inbox/`)
}
function api_v1_inbox_create(requestBody) {
  return coupleDateAPI.post(`/api/v1/inbox/`, requestBody)
}
function api_v1_inbox_read() {
  return coupleDateAPI.get(`/api/v1/inbox/{id}/`)
}
function api_v1_inbox_update(requestBody) {
  return coupleDateAPI.put(`/api/v1/inbox/{id}/`, requestBody)
}
function api_v1_inbox_partial_update(requestBody) {
  return coupleDateAPI.patch(`/api/v1/inbox/{id}/`, requestBody)
}
function api_v1_inbox_delete() {
  return coupleDateAPI.delete(`/api/v1/inbox/{id}/`)
}
function api_v1_like_list() {
  return coupleDateAPI.get(`/api/v1/like/`)
}
function api_v1_like_create(requestBody) {
  return coupleDateAPI.post(`/api/v1/like/`, requestBody)
}
function api_v1_like_read() {
  return coupleDateAPI.get(`/api/v1/like/{id}/`)
}
function api_v1_like_update(requestBody) {
  return coupleDateAPI.put(`/api/v1/like/{id}/`, requestBody)
}
function api_v1_like_partial_update(requestBody) {
  return coupleDateAPI.patch(`/api/v1/like/{id}/`, requestBody)
}
function api_v1_like_delete() {
  return coupleDateAPI.delete(`/api/v1/like/{id}/`)
}
function api_v1_login_create() {
  return coupleDateAPI.post(`/api/v1/login/`)
}
function api_v1_match_list() {
  return coupleDateAPI.get(`/api/v1/match/`)
}
function api_v1_match_create(requestBody) {
  return coupleDateAPI.post(`/api/v1/match/`, requestBody)
}
function api_v1_match_read() {
  return coupleDateAPI.get(`/api/v1/match/{id}/`)
}
function api_v1_match_update(requestBody) {
  return coupleDateAPI.put(`/api/v1/match/{id}/`, requestBody)
}
function api_v1_match_partial_update(requestBody) {
  return coupleDateAPI.patch(`/api/v1/match/{id}/`, requestBody)
}
function api_v1_match_delete() {
  return coupleDateAPI.delete(`/api/v1/match/{id}/`)
}
function api_v1_message_list() {
  return coupleDateAPI.get(`/api/v1/message/`)
}
function api_v1_message_create(requestBody) {
  return coupleDateAPI.post(`/api/v1/message/`, requestBody)
}
function api_v1_message_read() {
  return coupleDateAPI.get(`/api/v1/message/{id}/`)
}
function api_v1_message_update(requestBody) {
  return coupleDateAPI.put(`/api/v1/message/{id}/`, requestBody)
}
function api_v1_message_partial_update(requestBody) {
  return coupleDateAPI.patch(`/api/v1/message/{id}/`, requestBody)
}
function api_v1_message_delete() {
  return coupleDateAPI.delete(`/api/v1/message/{id}/`)
}
function api_v1_profile_list() {
  return coupleDateAPI.get(`/api/v1/profile/`)
}
function api_v1_profile_create(requestBody) {
  return coupleDateAPI.post(`/api/v1/profile/`, requestBody)
}
function api_v1_profile_read() {
  return coupleDateAPI.get(`/api/v1/profile/{id}/`)
}
function api_v1_profile_update(requestBody) {
  return coupleDateAPI.put(`/api/v1/profile/{id}/`, requestBody)
}
function api_v1_profile_partial_update(requestBody) {
  return coupleDateAPI.patch(`/api/v1/profile/{id}/`, requestBody)
}
function api_v1_profile_delete() {
  return coupleDateAPI.delete(`/api/v1/profile/{id}/`)
}
function api_v1_setting_list() {
  return coupleDateAPI.get(`/api/v1/setting/`)
}
function api_v1_setting_create(requestBody) {
  return coupleDateAPI.post(`/api/v1/setting/`, requestBody)
}
function api_v1_setting_read() {
  return coupleDateAPI.get(`/api/v1/setting/{id}/`)
}
function api_v1_setting_update(requestBody) {
  return coupleDateAPI.put(`/api/v1/setting/{id}/`, requestBody)
}
function api_v1_setting_partial_update(requestBody) {
  return coupleDateAPI.patch(`/api/v1/setting/{id}/`, requestBody)
}
function api_v1_setting_delete() {
  return coupleDateAPI.delete(`/api/v1/setting/{id}/`)
}
function api_v1_signup_create(requestBody) {
  return coupleDateAPI.post(`/api/v1/signup/`, requestBody)
}
function api_v1_userphoto_list() {
  return coupleDateAPI.get(`/api/v1/userphoto/`)
}
function api_v1_userphoto_create(requestBody) {
  return coupleDateAPI.post(`/api/v1/userphoto/`, requestBody)
}
function api_v1_userphoto_read() {
  return coupleDateAPI.get(`/api/v1/userphoto/{id}/`)
}
function api_v1_userphoto_update(requestBody) {
  return coupleDateAPI.put(`/api/v1/userphoto/{id}/`, requestBody)
}
function api_v1_userphoto_partial_update(requestBody) {
  return coupleDateAPI.patch(`/api/v1/userphoto/{id}/`, requestBody)
}
function api_v1_userphoto_delete() {
  return coupleDateAPI.delete(`/api/v1/userphoto/{id}/`)
}
function rest_auth_login_create(requestBody) {
  return coupleDateAPI.post(`/rest-auth/login/`, requestBody)
}
function rest_auth_logout_list() {
  return coupleDateAPI.get(`/rest-auth/logout/`)
}
function rest_auth_logout_create() {
  return coupleDateAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(requestBody) {
  return coupleDateAPI.post(`/rest-auth/password/change/`, requestBody)
}
function rest_auth_password_reset_create(requestBody) {
  return coupleDateAPI.post(`/rest-auth/password/reset/`, requestBody)
}
function rest_auth_password_reset_confirm_create(requestBody) {
  return coupleDateAPI.post(`/rest-auth/password/reset/confirm/`, requestBody)
}
function rest_auth_registration_create(requestBody) {
  return coupleDateAPI.post(`/rest-auth/registration/`, requestBody)
}
function rest_auth_registration_verify_email_create(requestBody) {
  return coupleDateAPI.post(
    `/rest-auth/registration/verify-email/`,
    requestBody
  )
}
function rest_auth_user_read() {
  return coupleDateAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(requestBody) {
  return coupleDateAPI.put(`/rest-auth/user/`, requestBody)
}
function rest_auth_user_partial_update(requestBody) {
  return coupleDateAPI.patch(`/rest-auth/user/`, requestBody)
}
export const apiService = {
  api_v1_customtext_list,
  api_v1_customtext_read,
  api_v1_customtext_update,
  api_v1_customtext_partial_update,
  api_v1_dislike_list,
  api_v1_dislike_create,
  api_v1_dislike_read,
  api_v1_dislike_update,
  api_v1_dislike_partial_update,
  api_v1_dislike_delete,
  api_v1_homepage_list,
  api_v1_homepage_read,
  api_v1_homepage_update,
  api_v1_homepage_partial_update,
  api_v1_inbox_list,
  api_v1_inbox_create,
  api_v1_inbox_read,
  api_v1_inbox_update,
  api_v1_inbox_partial_update,
  api_v1_inbox_delete,
  api_v1_like_list,
  api_v1_like_create,
  api_v1_like_read,
  api_v1_like_update,
  api_v1_like_partial_update,
  api_v1_like_delete,
  api_v1_login_create,
  api_v1_match_list,
  api_v1_match_create,
  api_v1_match_read,
  api_v1_match_update,
  api_v1_match_partial_update,
  api_v1_match_delete,
  api_v1_message_list,
  api_v1_message_create,
  api_v1_message_read,
  api_v1_message_update,
  api_v1_message_partial_update,
  api_v1_message_delete,
  api_v1_profile_list,
  api_v1_profile_create,
  api_v1_profile_read,
  api_v1_profile_update,
  api_v1_profile_partial_update,
  api_v1_profile_delete,
  api_v1_setting_list,
  api_v1_setting_create,
  api_v1_setting_read,
  api_v1_setting_update,
  api_v1_setting_partial_update,
  api_v1_setting_delete,
  api_v1_signup_create,
  api_v1_userphoto_list,
  api_v1_userphoto_create,
  api_v1_userphoto_read,
  api_v1_userphoto_update,
  api_v1_userphoto_partial_update,
  api_v1_userphoto_delete,
  rest_auth_login_create,
  rest_auth_logout_list,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_read,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
