export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: any;
};

/** 活动设置 */
export type ActivitySettings = {
  readonly __typename?: "ActivitySettings";
  /** 活动名称(unique) */
  readonly activitySettingsName?: Maybe<Scalars["String"]>;
  readonly appUserActivityActivitySettingsId?: Maybe<
    ReadonlyArray<Maybe<AppUserActivity>>
  >;
  /** 活动开始时间 */
  readonly beginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 活动编码(qixiLottery, 七夕抽奖; qixiCentCash, 七夕一分购; qixiAnswer, 七夕答题) */
  readonly code?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 活动结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 设定值 */
  readonly settingsValue?: Maybe<Scalars["JSONObject"]>;
  /** 状态 */
  readonly status?: Maybe<Scalars["String"]>;
  /** 类型 */
  readonly type?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 活动地址 */
  readonly url?: Maybe<Scalars["String"]>;
  /** 地址编码 */
  readonly urlCode?: Maybe<Scalars["String"]>;
};

/** 活动设置 */
export type ActivitySettingsAppUserActivityActivitySettingsIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 活动设置 分页查询返回 */
export type ActivitySettingsList = {
  readonly __typename?: "ActivitySettingsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ActivitySettings>>>;
};

export type ActivitySettingsSaveIn = {
  /** 活动名称(unique) */
  readonly activitySettingsName?: Maybe<Scalars["String"]>;
  readonly appUserActivityActivitySettingsId?: Maybe<
    ReadonlyArray<Maybe<AppUserActivitySaveIn>>
  >;
  /** 活动开始时间 */
  readonly beginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 活动编码(qixiLottery, 七夕抽奖; qixiCentCash, 七夕一分购; qixiAnswer, 七夕答题) */
  readonly code?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 活动结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 设定值 */
  readonly settingsValue?: Maybe<Scalars["JSONObject"]>;
  /** 状态 */
  readonly status?: Maybe<Scalars["String"]>;
  /** 类型 */
  readonly type?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 活动地址 */
  readonly url?: Maybe<Scalars["String"]>;
  /** 地址编码 */
  readonly urlCode?: Maybe<Scalars["String"]>;
};

/** 地址库 */
export type AddressLibrary = {
  readonly __typename?: "AddressLibrary";
  /** 父级 id分割符 : */
  readonly addressCode?: Maybe<Scalars["String"]>;
  /** 地址名 */
  readonly addressName?: Maybe<Scalars["String"]>;
  /** 详细地址 */
  readonly addressRemark?: Maybe<Scalars["String"]>;
  /** 类别(province 省，city 市，area 区，street 街道，community 社区，residential 小区) */
  readonly addressType?: Maybe<Scalars["String"]>;
  readonly appUserAddressCommunityId?: Maybe<
    ReadonlyArray<Maybe<AppUserAddress>>
  >;
  readonly appUserAddressResidentialId?: Maybe<
    ReadonlyArray<Maybe<AppUserAddress>>
  >;
  readonly appUserAddressStreetId?: Maybe<ReadonlyArray<Maybe<AppUserAddress>>>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  readonly communityUpvoteActivityCommunityId?: Maybe<
    ReadonlyArray<Maybe<CommunityUpvoteActivity>>
  >;
  readonly communityUpvoteCommunityId?: Maybe<
    ReadonlyArray<Maybe<CommunityUpvote>>
  >;
  readonly communityUpvoteStreetId?: Maybe<
    ReadonlyArray<Maybe<CommunityUpvote>>
  >;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 户数 */
  readonly familiesNum?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 父级地址id */
  readonly parentId?: Maybe<Scalars["String"]>;
  readonly parentIdObj?: Maybe<AddressLibrary>;
  /** 居民数 */
  readonly peopleNum?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  readonly upvoteRecordCommunityId?: Maybe<ReadonlyArray<Maybe<UpvoteRecord>>>;
};

/** 地址库 */
export type AddressLibraryAppUserAddressCommunityIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 地址库 */
export type AddressLibraryAppUserAddressResidentialIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 地址库 */
export type AddressLibraryAppUserAddressStreetIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 地址库 */
export type AddressLibraryCommunityUpvoteActivityCommunityIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 地址库 */
export type AddressLibraryCommunityUpvoteCommunityIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 地址库 */
export type AddressLibraryCommunityUpvoteStreetIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 地址库 */
export type AddressLibraryUpvoteRecordCommunityIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 社区启用活动表 */
export type AddressLibraryActivity = {
  readonly __typename?: "AddressLibraryActivity";
  /** 活动类型 */
  readonly activityName?: Maybe<Scalars["String"]>;
  /** 活动状态(Y/N, 启用/禁用) */
  readonly activityStatus?: Maybe<Scalars["String"]>;
  /** 社区id */
  readonly addressLibraryId?: Maybe<Scalars["String"]>;
  readonly addressLibraryIdObj?: Maybe<AddressLibrary>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区中心位置 */
  readonly centerAddress?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 负责人 */
  readonly dutyPerson?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名完整带后缀 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 允许超支启用/禁用(Y/N) */
  readonly overspendAble?: Maybe<Scalars["String"]>;
  /** 电话 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly shifenCommunityPointsAddressActivityId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityPoints>>
  >;
  /** 石分社区积分 */
  readonly shifenPoints?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 社区启用活动表 */
export type AddressLibraryActivityShifenCommunityPointsAddressActivityIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 社区启用活动表 分页查询返回 */
export type AddressLibraryActivityList = {
  readonly __typename?: "AddressLibraryActivityList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<AddressLibraryActivity>>>;
};

export type AddressLibraryActivitySaveIn = {
  /** 活动类型 */
  readonly activityName?: Maybe<Scalars["String"]>;
  /** 活动状态(Y/N, 启用/禁用) */
  readonly activityStatus?: Maybe<Scalars["String"]>;
  /** 社区id */
  readonly addressLibraryId?: Maybe<Scalars["String"]>;
  readonly addressLibraryIdObj?: Maybe<AddressLibrarySaveIn>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区中心位置 */
  readonly centerAddress?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 负责人 */
  readonly dutyPerson?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名完整带后缀 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 允许超支启用/禁用(Y/N) */
  readonly overspendAble?: Maybe<Scalars["String"]>;
  /** 电话 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly shifenCommunityPointsAddressActivityId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityPointsSaveIn>>
  >;
  /** 石分社区积分 */
  readonly shifenPoints?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 地址库 分页查询返回 */
export type AddressLibraryList = {
  readonly __typename?: "AddressLibraryList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<AddressLibrary>>>;
};

export type AddressLibrarySaveIn = {
  /** 父级 id分割符 : */
  readonly addressCode?: Maybe<Scalars["String"]>;
  readonly addressLibraryParentId?: Maybe<
    ReadonlyArray<Maybe<AddressLibrarySaveIn>>
  >;
  /** 地址名 */
  readonly addressName?: Maybe<Scalars["String"]>;
  /** 详细地址 */
  readonly addressRemark?: Maybe<Scalars["String"]>;
  /** 类别(province 省，city 市，area 区，street 街道，community 社区，residential 小区) */
  readonly addressType?: Maybe<Scalars["String"]>;
  readonly appUserAddressCommunityId?: Maybe<
    ReadonlyArray<Maybe<AppUserAddressSaveIn>>
  >;
  readonly appUserAddressResidentialId?: Maybe<
    ReadonlyArray<Maybe<AppUserAddressSaveIn>>
  >;
  readonly appUserAddressStreetId?: Maybe<
    ReadonlyArray<Maybe<AppUserAddressSaveIn>>
  >;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  readonly communityUpvoteActivityCommunityId?: Maybe<
    ReadonlyArray<Maybe<CommunityUpvoteActivitySaveIn>>
  >;
  readonly communityUpvoteCommunityId?: Maybe<
    ReadonlyArray<Maybe<CommunityUpvoteSaveIn>>
  >;
  readonly communityUpvoteStreetId?: Maybe<
    ReadonlyArray<Maybe<CommunityUpvoteSaveIn>>
  >;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 户数 */
  readonly familiesNum?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 父级地址id */
  readonly parentId?: Maybe<Scalars["String"]>;
  /** 居民数 */
  readonly peopleNum?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  readonly upvoteRecordCommunityId?: Maybe<
    ReadonlyArray<Maybe<UpvoteRecordSaveIn>>
  >;
};

/** 查询选项 */
export type AggregateOptions = {
  /** 结果类型。如field是模型中的字段，默认为字段的类型，其它情况为默认为 float */
  readonly dataType?: Maybe<Scalars["String"]>;
  /** 为字段使用DISTINCT聚合查询 */
  readonly distinct?: Maybe<Scalars["Boolean"]>;
  /** 当为true时，第一个aggregateFunction的返回值为dataType指定和返回，如果添加了额外的属性，则由group分句决定。设置plain 为 false 时会返回所有返回行中的所有值 。默认为 true */
  readonly plain?: Maybe<Scalars["Boolean"]>;
  /** 查询属性 */
  readonly where?: Maybe<Scalars["JSONObject"]>;
};

/** 终端用户 */
export type AppUser = {
  readonly __typename?: "AppUser";
  /** 凭证 */
  readonly accessToken?: Maybe<Scalars["String"]>;
  readonly appUserAddressObj?: Maybe<AppUserAddress>;
  readonly appUserDetailsObj?: Maybe<AppUserDetails>;
  readonly appUserInviteIntroductId?: Maybe<
    ReadonlyArray<Maybe<AppUserInvite>>
  >;
  readonly appUserInviteInviteesId?: Maybe<ReadonlyArray<Maybe<AppUserInvite>>>;
  readonly appUserPowerAppUserId?: Maybe<ReadonlyArray<Maybe<AppUserPower>>>;
  /** 用户状态N停用Y启用 */
  readonly appUserStatus?: Maybe<Scalars["String"]>;
  /** 用户类型(ordinary 普通用户,recovery 回收人员,system 系统用户,checkuser 检查人员) */
  readonly appUserType?: Maybe<Scalars["String"]>;
  readonly appUserUpvoteObj?: Maybe<AppUserUpvote>;
  readonly articleReadRecordAppUserId?: Maybe<
    ReadonlyArray<Maybe<ArticleReadRecord>>
  >;
  /** wx头像 */
  readonly avatarUrl?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** wxmini-用户所属企业的corpid */
  readonly corpid?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 系统默认头像 */
  readonly defaultAvatar?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 身份证头像 */
  readonly idHead?: Maybe<Scalars["String"]>;
  /** 身份证国徽 */
  readonly idNational?: Maybe<Scalars["String"]>;
  /** 登陆code（最后一次） */
  readonly jsCode?: Maybe<Scalars["String"]>;
  /** 用户最后心跳时间 */
  readonly lastHeartbeatTime?: Maybe<Scalars["DateTime"]>;
  /** 最后登陆时间 */
  readonly lastLoginTime?: Maybe<Scalars["DateTime"]>;
  readonly loginRecordAppUserId?: Maybe<ReadonlyArray<Maybe<LoginRecord>>>;
  readonly lotteryDrawRecordAppUserId?: Maybe<
    ReadonlyArray<Maybe<LotteryDrawRecord>>
  >;
  readonly mailAddressAppUserId?: Maybe<ReadonlyArray<Maybe<MailAddress>>>;
  /** 用户昵称 */
  readonly nickName?: Maybe<Scalars["String"]>;
  /** wxmini-企业微信的jscode2session返回的是userid，而微信返回的是openid */
  readonly openid?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 密码（小程序不需要） */
  readonly password?: Maybe<Scalars["String"]>;
  /** 注册手机号 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 用户真实姓名 */
  readonly realName?: Maybe<Scalars["String"]>;
  /** 注册app */
  readonly registerApp?: Maybe<Scalars["String"]>;
  /** 注册时间 */
  readonly registerTime?: Maybe<Scalars["DateTime"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly reportAppUserId?: Maybe<ReadonlyArray<Maybe<Report>>>;
  readonly signInRecordAppUserId?: Maybe<ReadonlyArray<Maybe<SignInRecord>>>;
  readonly stoneScoreAppUserId?: Maybe<ReadonlyArray<Maybe<StoneScore>>>;
  /** 用户最后颁发token */
  readonly token?: Maybe<Scalars["String"]>;
  readonly trackingOrderAppUserId?: Maybe<ReadonlyArray<Maybe<TrackingOrder>>>;
  /** wxmini-用户在开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回 */
  readonly unionid?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  readonly upvoteRecordAppUserId?: Maybe<ReadonlyArray<Maybe<UpvoteRecord>>>;
  /** 用户性别(m, 男; w, 女) */
  readonly userGender?: Maybe<Scalars["String"]>;
  /** 用户名登陆用 */
  readonly userName?: Maybe<Scalars["String"]>;
};

/** 终端用户 */
export type AppUserAppUserAddressObjArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserAppUserDetailsObjArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserAppUserInviteIntroductIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserAppUserInviteInviteesIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserAppUserPowerAppUserIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserAppUserUpvoteObjArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserArticleReadRecordAppUserIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserLoginRecordAppUserIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserLotteryDrawRecordAppUserIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserMailAddressAppUserIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserReportAppUserIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserSignInRecordAppUserIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserStoneScoreAppUserIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserTrackingOrderAppUserIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 终端用户 */
export type AppUserUpvoteRecordAppUserIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 用户活动记录表 */
export type AppUserActivity = {
  readonly __typename?: "AppUserActivity";
  /** 活动id */
  readonly activitySettingsId?: Maybe<Scalars["String"]>;
  readonly activitySettingsIdObj?: Maybe<ActivitySettings>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 业务id */
  readonly bussinessId?: Maybe<Scalars["String"]>;
  /** 业务表表名 */
  readonly bussinessType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 日期 */
  readonly day?: Maybe<Scalars["DateTime"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 业务值 */
  readonly value?: Maybe<Scalars["JSONObject"]>;
};

/** 用户活动记录表 分页查询返回 */
export type AppUserActivityList = {
  readonly __typename?: "AppUserActivityList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<AppUserActivity>>>;
};

export type AppUserActivitySaveIn = {
  /** 活动id */
  readonly activitySettingsId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 业务id */
  readonly bussinessId?: Maybe<Scalars["String"]>;
  /** 业务表表名 */
  readonly bussinessType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 日期 */
  readonly day?: Maybe<Scalars["DateTime"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 业务值 */
  readonly value?: Maybe<Scalars["JSONObject"]>;
};

/** 用户明细表 */
export type AppUserAddress = {
  readonly __typename?: "AppUserAddress";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 所属区ID */
  readonly areaId?: Maybe<Scalars["String"]>;
  readonly areaIdObj?: Maybe<AddressLibrary>;
  /** 后端ip */
  readonly backIp?: Maybe<Scalars["String"]>;
  /** 楼号 */
  readonly building?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  readonly communityIdObj?: Maybe<AddressLibrary>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 省/市-街道-社区-小区 */
  readonly location?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 门牌号 */
  readonly plate?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  readonly residentialIdObj?: Maybe<AddressLibrary>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  readonly streetIdObj?: Maybe<AddressLibrary>;
  /** 授权手机号 */
  readonly telephone?: Maybe<Scalars["String"]>;
  /** 单元 */
  readonly unit?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 用户明细表 分页查询返回 */
export type AppUserAddressList = {
  readonly __typename?: "AppUserAddressList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<AppUserAddress>>>;
};

export type AppUserAddressSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 所属区ID */
  readonly areaId?: Maybe<Scalars["String"]>;
  /** 后端ip */
  readonly backIp?: Maybe<Scalars["String"]>;
  /** 楼号 */
  readonly building?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 省/市-街道-社区-小区 */
  readonly location?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 门牌号 */
  readonly plate?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  /** 授权手机号 */
  readonly telephone?: Maybe<Scalars["String"]>;
  /** 单元 */
  readonly unit?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 用户基础信息表 */
export type AppUserDetails = {
  readonly __typename?: "AppUserDetails";
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 达人值 */
  readonly experience?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 石分宝 */
  readonly score?: Maybe<Scalars["Float"]>;
  /** 用户状态, Y/N */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 用户基础信息表 分页查询返回 */
export type AppUserDetailsList = {
  readonly __typename?: "AppUserDetailsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<AppUserDetails>>>;
};

export type AppUserDetailsSaveIn = {
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 达人值 */
  readonly experience?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 石分宝 */
  readonly score?: Maybe<Scalars["Float"]>;
  /** 用户状态, Y/N */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 邀请注册表 */
export type AppUserInvite = {
  readonly __typename?: "AppUserInvite";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 邀请注册后完善地址加分 */
  readonly completeScore?: Maybe<Scalars["Float"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 用户ID, 邀请人, 推荐人{appUser} */
  readonly introductId?: Maybe<Scalars["String"]>;
  /** 用户ID, 邀请人, 推荐人{appUser} */
  readonly introductIdObj?: Maybe<AppUser>;
  /** 邀请注册加分详情 */
  readonly inviteScore?: Maybe<Scalars["Float"]>;
  /** 被邀请人ID{appUser} */
  readonly inviteesId?: Maybe<Scalars["String"]>;
  /** 被邀请人ID{appUser} */
  readonly inviteesIdObj?: Maybe<AppUser>;
  /** 是否已完善信息 */
  readonly isComplete?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 邀请注册表 分页查询返回 */
export type AppUserInviteList = {
  readonly __typename?: "AppUserInviteList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<AppUserInvite>>>;
};

export type AppUserInviteSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 邀请注册后完善地址加分 */
  readonly completeScore?: Maybe<Scalars["Float"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 用户ID, 邀请人, 推荐人{appUser} */
  readonly introductId?: Maybe<Scalars["String"]>;
  /** 邀请注册加分详情 */
  readonly inviteScore?: Maybe<Scalars["Float"]>;
  /** 被邀请人ID{appUser} */
  readonly inviteesId?: Maybe<Scalars["String"]>;
  /** 是否已完善信息 */
  readonly isComplete?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 终端用户 分页查询返回 */
export type AppUserList = {
  readonly __typename?: "AppUserList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<AppUser>>>;
};

/** 小程序用户角色权限列表 */
export type AppUserPower = {
  readonly __typename?: "AppUserPower";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 开放区域(all, 全部; part, 部分) */
  readonly openScope?: Maybe<Scalars["String"]>;
  /** 排序 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 用户角色权限ID */
  readonly powerId?: Maybe<Scalars["String"]>;
  readonly powerIdObj?: Maybe<Power>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  readonly userPowerLocationUserPowerId?: Maybe<
    ReadonlyArray<Maybe<UserPowerLocation>>
  >;
};

/** 小程序用户角色权限列表 */
export type AppUserPowerUserPowerLocationUserPowerIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 小程序用户角色权限列表 分页查询返回 */
export type AppUserPowerList = {
  readonly __typename?: "AppUserPowerList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<AppUserPower>>>;
};

export type AppUserPowerSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 开放区域(all, 全部; part, 部分) */
  readonly openScope?: Maybe<Scalars["String"]>;
  /** 排序 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 用户角色权限ID */
  readonly powerId?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  readonly userPowerLocationUserPowerId?: Maybe<
    ReadonlyArray<Maybe<UserPowerLocationSaveIn>>
  >;
};

export type AppUserSaveIn = {
  /** 凭证 */
  readonly accessToken?: Maybe<Scalars["String"]>;
  readonly appUserAddressAppUserId?: Maybe<
    ReadonlyArray<Maybe<AppUserAddressSaveIn>>
  >;
  readonly appUserDetailsAppUserId?: Maybe<
    ReadonlyArray<Maybe<AppUserDetailsSaveIn>>
  >;
  readonly appUserInviteIntroductId?: Maybe<
    ReadonlyArray<Maybe<AppUserInviteSaveIn>>
  >;
  readonly appUserInviteInviteesId?: Maybe<
    ReadonlyArray<Maybe<AppUserInviteSaveIn>>
  >;
  /** 用户状态N停用Y启用 */
  readonly appUserStatus?: Maybe<Scalars["String"]>;
  /** 用户类型(ordinary 普通用户,recovery 回收人员,system 系统用户,checkuser 检查人员) */
  readonly appUserType?: Maybe<Scalars["String"]>;
  readonly appUserUpvoteAppUserId?: Maybe<
    ReadonlyArray<Maybe<AppUserUpvoteSaveIn>>
  >;
  readonly articleReadRecordAppUserId?: Maybe<
    ReadonlyArray<Maybe<ArticleReadRecordSaveIn>>
  >;
  /** wx头像 */
  readonly avatarUrl?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** wxmini-用户所属企业的corpid */
  readonly corpid?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 系统默认头像 */
  readonly defaultAvatar?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 身份证头像 */
  readonly idHead?: Maybe<Scalars["String"]>;
  /** 身份证国徽 */
  readonly idNational?: Maybe<Scalars["String"]>;
  /** 登陆code（最后一次） */
  readonly jsCode?: Maybe<Scalars["String"]>;
  /** 用户最后心跳时间 */
  readonly lastHeartbeatTime?: Maybe<Scalars["DateTime"]>;
  /** 最后登陆时间 */
  readonly lastLoginTime?: Maybe<Scalars["DateTime"]>;
  readonly loginRecordAppUserId?: Maybe<
    ReadonlyArray<Maybe<LoginRecordSaveIn>>
  >;
  readonly lotteryDrawRecordAppUserId?: Maybe<
    ReadonlyArray<Maybe<LotteryDrawRecordSaveIn>>
  >;
  readonly mailAddressAppUserId?: Maybe<
    ReadonlyArray<Maybe<MailAddressSaveIn>>
  >;
  /** 用户昵称 */
  readonly nickName?: Maybe<Scalars["String"]>;
  /** wxmini-企业微信的jscode2session返回的是userid，而微信返回的是openid */
  readonly openid?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 密码（小程序不需要） */
  readonly password?: Maybe<Scalars["String"]>;
  /** 注册手机号 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 用户真实姓名 */
  readonly realName?: Maybe<Scalars["String"]>;
  /** 注册app */
  readonly registerApp?: Maybe<Scalars["String"]>;
  /** 注册时间 */
  readonly registerTime?: Maybe<Scalars["DateTime"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly reportAppUserId?: Maybe<ReadonlyArray<Maybe<ReportSaveIn>>>;
  readonly signInRecordAppUserId?: Maybe<
    ReadonlyArray<Maybe<SignInRecordSaveIn>>
  >;
  readonly stoneScoreAppUserId?: Maybe<ReadonlyArray<Maybe<StoneScoreSaveIn>>>;
  /** 用户最后颁发token */
  readonly token?: Maybe<Scalars["String"]>;
  readonly trackingOrderAppUserId?: Maybe<
    ReadonlyArray<Maybe<TrackingOrderSaveIn>>
  >;
  /** wxmini-用户在开放平台的唯一标识符，在满足 UnionID 下发条件的情况下会返回 */
  readonly unionid?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  readonly upvoteRecordAppUserId?: Maybe<
    ReadonlyArray<Maybe<UpvoteRecordSaveIn>>
  >;
  /** 用户性别(m, 男; w, 女) */
  readonly userGender?: Maybe<Scalars["String"]>;
  /** 用户名登陆用 */
  readonly userName?: Maybe<Scalars["String"]>;
};

/** 用户点亮值 */
export type AppUserUpvote = {
  readonly __typename?: "AppUserUpvote";
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 点亮值 */
  readonly upvoteVal?: Maybe<Scalars["Float"]>;
};

/** 用户点亮值 分页查询返回 */
export type AppUserUpvoteList = {
  readonly __typename?: "AppUserUpvoteList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<AppUserUpvote>>>;
};

export type AppUserUpvoteSaveIn = {
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 点亮值 */
  readonly upvoteVal?: Maybe<Scalars["Float"]>;
};

/** 排列5记录 */
export type Arrangement = {
  readonly __typename?: "Arrangement";
  /** 数值 */
  readonly arrangementValue?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** curl爬虫结果 */
  readonly curlData?: Maybe<Scalars["JSONObject"]>;
  /** 日期 */
  readonly day?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 排列5记录 分页查询返回 */
export type ArrangementList = {
  readonly __typename?: "ArrangementList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<Arrangement>>>;
};

export type ArrangementSaveIn = {
  /** 数值 */
  readonly arrangementValue?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** curl爬虫结果 */
  readonly curlData?: Maybe<Scalars["JSONObject"]>;
  /** 日期 */
  readonly day?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 文章记录表 */
export type Article = {
  readonly __typename?: "Article";
  readonly articleFileArticleId?: Maybe<ReadonlyArray<Maybe<ArticleFile>>>;
  /** 文章标签 */
  readonly articleLabel?: Maybe<Scalars["JSONObject"]>;
  readonly articleReadRecordArticleId?: Maybe<
    ReadonlyArray<Maybe<ArticleReadRecord>>
  >;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 过期时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 公众号url */
  readonly officialUrl?: Maybe<Scalars["String"]>;
  /** 置顶 */
  readonly onTop?: Maybe<Scalars["DateTime"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 发布时间 */
  readonly publishTime?: Maybe<Scalars["DateTime"]>;
  /** 阅读量(人次) */
  readonly readingAmount?: Maybe<Scalars["Float"]>;
  /** 阅读次数 */
  readonly readingCount?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 生效时间 */
  readonly startTime?: Maybe<Scalars["DateTime"]>;
  /** 状态 */
  readonly status?: Maybe<Scalars["String"]>;
  /** 文章标题 */
  readonly title?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 更新人id{appUser} */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 更新人id{appUser} */
  readonly updatedIdObj?: Maybe<AppUser>;
  /** 视频链接 */
  readonly videoUrl?: Maybe<Scalars["String"]>;
};

/** 文章记录表 */
export type ArticleArticleFileArticleIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 文章记录表 */
export type ArticleArticleReadRecordArticleIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 文章文件表 */
export type ArticleFile = {
  readonly __typename?: "ArticleFile";
  /** 文章Id */
  readonly articleId?: Maybe<Scalars["String"]>;
  readonly articleIdObj?: Maybe<Article>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 文章文件表 分页查询返回 */
export type ArticleFileList = {
  readonly __typename?: "ArticleFileList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ArticleFile>>>;
};

export type ArticleFileSaveIn = {
  /** 文章Id */
  readonly articleId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 文章记录表 分页查询返回 */
export type ArticleList = {
  readonly __typename?: "ArticleList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<Article>>>;
};

/** 文章阅读记录表 */
export type ArticleReadRecord = {
  readonly __typename?: "ArticleReadRecord";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 文章ID */
  readonly articleId?: Maybe<Scalars["String"]>;
  readonly articleIdObj?: Maybe<Article>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 文章阅读记录表 分页查询返回 */
export type ArticleReadRecordList = {
  readonly __typename?: "ArticleReadRecordList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ArticleReadRecord>>>;
};

export type ArticleReadRecordSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 文章ID */
  readonly articleId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type ArticleSaveIn = {
  readonly articleFileArticleId?: Maybe<
    ReadonlyArray<Maybe<ArticleFileSaveIn>>
  >;
  /** 文章标签 */
  readonly articleLabel?: Maybe<Scalars["JSONObject"]>;
  readonly articleReadRecordArticleId?: Maybe<
    ReadonlyArray<Maybe<ArticleReadRecordSaveIn>>
  >;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 过期时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 公众号url */
  readonly officialUrl?: Maybe<Scalars["String"]>;
  /** 置顶 */
  readonly onTop?: Maybe<Scalars["DateTime"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 发布时间 */
  readonly publishTime?: Maybe<Scalars["DateTime"]>;
  /** 阅读量(人次) */
  readonly readingAmount?: Maybe<Scalars["Float"]>;
  /** 阅读次数 */
  readonly readingCount?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 生效时间 */
  readonly startTime?: Maybe<Scalars["DateTime"]>;
  /** 状态 */
  readonly status?: Maybe<Scalars["String"]>;
  /** 文章标题 */
  readonly title?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 更新人id{appUser} */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 视频链接 */
  readonly videoUrl?: Maybe<Scalars["String"]>;
};

/** 广告列表 */
export type BussinessActivity = {
  readonly __typename?: "BussinessActivity";
  /** 广告名称 */
  readonly activityName?: Maybe<Scalars["String"]>;
  /** 活动状态, Y/N */
  readonly activityStatus?: Maybe<Scalars["String"]>;
  /** 广告位类型(banner, banner广告; stimulate, 激励式广告; interstitial, 插屏广告; video, 视频广告; flushVideo, 视频贴片广告; square, 格子广告; cover, 封面广告; template, 原生模板广告) */
  readonly activitySubtype?: Maybe<Scalars["String"]>;
  /** 广告类型(stone, 石分达人; jingd, 京东; weChat, 微信流量主; cooperation, 异业合作; toApplet, 跳转小程序) */
  readonly activityType?: Maybe<Scalars["String"]>;
  /** 链接地址 */
  readonly activityUrl?: Maybe<Scalars["String"]>;
  /** appid */
  readonly appId?: Maybe<Scalars["String"]>;
  /** 开始时间 */
  readonly beginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 是否展示 */
  readonly isShow?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 弹窗规则 */
  readonly popupRole?: Maybe<Scalars["String"]>;
  /** 广告投放位置(cover, 开屏; stoneScore, 石分宝场景; home, 首页弹窗; homeBanner, 首页banner; community, 社区发言; communityList, 社区列表; communityDetail, 社区发言-详情页; myManagement, 我的页面; articleList, 文章列表; lotteryFloat, 抽奖浮窗; snatchFloat, 夺宝-浮窗; snatchBottom, 夺宝-底部; wellChosen, 精选banner) */
  readonly position?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 奖励次数 */
  readonly rewardValue?: Maybe<Scalars["Float"]>;
  /** 目标群体, 累加和(石景山区, 1; 非石景山区, 2) */
  readonly targetGroups?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 链接类型、内部 or 外部 */
  readonly urlType?: Maybe<Scalars["String"]>;
};

/** 广告列表 分页查询返回 */
export type BussinessActivityList = {
  readonly __typename?: "BussinessActivityList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<BussinessActivity>>>;
};

export type BussinessActivitySaveIn = {
  /** 广告名称 */
  readonly activityName?: Maybe<Scalars["String"]>;
  /** 活动状态, Y/N */
  readonly activityStatus?: Maybe<Scalars["String"]>;
  /** 广告位类型(banner, banner广告; stimulate, 激励式广告; interstitial, 插屏广告; video, 视频广告; flushVideo, 视频贴片广告; square, 格子广告; cover, 封面广告; template, 原生模板广告) */
  readonly activitySubtype?: Maybe<Scalars["String"]>;
  /** 广告类型(stone, 石分达人; jingd, 京东; weChat, 微信流量主; cooperation, 异业合作; toApplet, 跳转小程序) */
  readonly activityType?: Maybe<Scalars["String"]>;
  /** 链接地址 */
  readonly activityUrl?: Maybe<Scalars["String"]>;
  /** appid */
  readonly appId?: Maybe<Scalars["String"]>;
  /** 开始时间 */
  readonly beginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 是否展示 */
  readonly isShow?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 弹窗规则 */
  readonly popupRole?: Maybe<Scalars["String"]>;
  /** 广告投放位置(cover, 开屏; stoneScore, 石分宝场景; home, 首页弹窗; homeBanner, 首页banner; community, 社区发言; communityList, 社区列表; communityDetail, 社区发言-详情页; myManagement, 我的页面; articleList, 文章列表; lotteryFloat, 抽奖浮窗; snatchFloat, 夺宝-浮窗; snatchBottom, 夺宝-底部; wellChosen, 精选banner) */
  readonly position?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 奖励次数 */
  readonly rewardValue?: Maybe<Scalars["Float"]>;
  /** 目标群体, 累加和(石景山区, 1; 非石景山区, 2) */
  readonly targetGroups?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 链接类型、内部 or 外部 */
  readonly urlType?: Maybe<Scalars["String"]>;
};

/** 观看广告奖励记录 */
export type BussinessAdvertisingReward = {
  readonly __typename?: "BussinessAdvertisingReward";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 奖励类型(snatch, 夺宝; lottery, 抽奖) */
  readonly rewardType?: Maybe<Scalars["String"]>;
  /** 奖励次数 */
  readonly rewardValue?: Maybe<Scalars["Float"]>;
  /** 夺宝数据ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 观看广告奖励记录 分页查询返回 */
export type BussinessAdvertisingRewardList = {
  readonly __typename?: "BussinessAdvertisingRewardList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<BussinessAdvertisingReward>>>;
};

export type BussinessAdvertisingRewardSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 奖励类型(snatch, 夺宝; lottery, 抽奖) */
  readonly rewardType?: Maybe<Scalars["String"]>;
  /** 奖励次数 */
  readonly rewardValue?: Maybe<Scalars["Float"]>;
  /** 夺宝数据ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type CardCodeFindAppUserOut = {
  readonly __typename?: "CardCodeFindAppUserOut";
  readonly cardCode?: Maybe<Scalars["String"]>;
  readonly cardId?: Maybe<Scalars["String"]>;
  readonly cardStatus?: Maybe<Scalars["String"]>;
  readonly cardType?: Maybe<Scalars["String"]>;
  readonly location?: Maybe<Scalars["String"]>;
  readonly plate?: Maybe<Scalars["String"]>;
  readonly points?: Maybe<Scalars["String"]>;
  readonly registerTime?: Maybe<Scalars["String"]>;
  readonly telephone?: Maybe<Scalars["String"]>;
  readonly userGender?: Maybe<Scalars["String"]>;
};

/** 卡号临时表 */
export type CardCodeTemp = {
  readonly __typename?: "CardCodeTemp";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 类型 */
  readonly cardCode?: Maybe<Scalars["String"]>;
  /** 类型 */
  readonly cardId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 卡号临时表 分页查询返回 */
export type CardCodeTempList = {
  readonly __typename?: "CardCodeTempList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CardCodeTemp>>>;
};

export type CardCodeTempSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 类型 */
  readonly cardCode?: Maybe<Scalars["String"]>;
  /** 类型 */
  readonly cardId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 社区发言表 */
export type CommentBoard = {
  readonly __typename?: "CommentBoard";
  /** 总投票人数 */
  readonly allVote?: Maybe<Scalars["Float"]>;
  /** 匿名留言, Y/N */
  readonly anonymous?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 板块ID */
  readonly classifyId?: Maybe<Scalars["String"]>;
  readonly classifyIdObj?: Maybe<CommentClassify>;
  readonly commentBoardLogCommentBoardId?: Maybe<
    ReadonlyArray<Maybe<CommentBoardLog>>
  >;
  readonly commentBoardVoteCommentBoardId?: Maybe<
    ReadonlyArray<Maybe<CommentBoardVote>>
  >;
  readonly commentImageCommentBoardId?: Maybe<
    ReadonlyArray<Maybe<CommentImage>>
  >;
  /** 留言状态, Y/N */
  readonly commentStatus?: Maybe<Scalars["String"]>;
  /** 用户留言 */
  readonly commentText?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 删除(Y/N) */
  readonly isDel?: Maybe<Scalars["String"]>;
  /** 标签 */
  readonly label?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 上一次的奖励阈值 */
  readonly scoreLevel?: Maybe<Scalars["Float"]>;
  /** 标语 */
  readonly slogan?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** A选项人数 */
  readonly voteA?: Maybe<Scalars["Float"]>;
  /** B选项人数 */
  readonly voteB?: Maybe<Scalars["Float"]>;
};

/** 社区发言表 */
export type CommentBoardCommentBoardLogCommentBoardIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 社区发言表 */
export type CommentBoardCommentBoardVoteCommentBoardIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 社区发言表 */
export type CommentBoardCommentImageCommentBoardIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 社区发言表 分页查询返回 */
export type CommentBoardList = {
  readonly __typename?: "CommentBoardList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CommentBoard>>>;
};

/** 社区发言操作日志 */
export type CommentBoardLog = {
  readonly __typename?: "CommentBoardLog";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 发言ID */
  readonly commentBoardId?: Maybe<Scalars["String"]>;
  readonly commentBoardIdObj?: Maybe<CommentBoard>;
  /** 内容 */
  readonly content?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 类型 */
  readonly logType?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 社区发言操作日志 分页查询返回 */
export type CommentBoardLogList = {
  readonly __typename?: "CommentBoardLogList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CommentBoardLog>>>;
};

export type CommentBoardLogSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 发言ID */
  readonly commentBoardId?: Maybe<Scalars["String"]>;
  /** 内容 */
  readonly content?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 类型 */
  readonly logType?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type CommentBoardSaveIn = {
  /** 总投票人数 */
  readonly allVote?: Maybe<Scalars["Float"]>;
  /** 匿名留言, Y/N */
  readonly anonymous?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 板块ID */
  readonly classifyId?: Maybe<Scalars["String"]>;
  readonly commentBoardLogCommentBoardId?: Maybe<
    ReadonlyArray<Maybe<CommentBoardLogSaveIn>>
  >;
  readonly commentBoardVoteCommentBoardId?: Maybe<
    ReadonlyArray<Maybe<CommentBoardVoteSaveIn>>
  >;
  readonly commentImageCommentBoardId?: Maybe<
    ReadonlyArray<Maybe<CommentImageSaveIn>>
  >;
  /** 留言状态, Y/N */
  readonly commentStatus?: Maybe<Scalars["String"]>;
  /** 用户留言 */
  readonly commentText?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 删除(Y/N) */
  readonly isDel?: Maybe<Scalars["String"]>;
  /** 标签 */
  readonly label?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 上一次的奖励阈值 */
  readonly scoreLevel?: Maybe<Scalars["Float"]>;
  /** 标语 */
  readonly slogan?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** A选项人数 */
  readonly voteA?: Maybe<Scalars["Float"]>;
  /** B选项人数 */
  readonly voteB?: Maybe<Scalars["Float"]>;
};

/** 社区发言参与人数统计 */
export type CommentBoardStat = {
  readonly __typename?: "CommentBoardStat";
  /** 板块名称{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 板块名称{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 板块ID */
  readonly classifyId?: Maybe<Scalars["String"]>;
  readonly classifyIdObj?: Maybe<CommentClassify>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 社区发言参与人数统计 分页查询返回 */
export type CommentBoardStatList = {
  readonly __typename?: "CommentBoardStatList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CommentBoardStat>>>;
};

export type CommentBoardStatSaveIn = {
  /** 板块名称{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 板块ID */
  readonly classifyId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 社区发言投票详情 */
export type CommentBoardVote = {
  readonly __typename?: "CommentBoardVote";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区发言ID */
  readonly commentBoardId?: Maybe<Scalars["String"]>;
  readonly commentBoardIdObj?: Maybe<CommentBoard>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** A, A选项; B, B选项 */
  readonly voteKey?: Maybe<Scalars["String"]>;
  /** 投票内容 */
  readonly voteValue?: Maybe<Scalars["String"]>;
};

/** 社区发言投票详情 分页查询返回 */
export type CommentBoardVoteList = {
  readonly __typename?: "CommentBoardVoteList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CommentBoardVote>>>;
};

export type CommentBoardVoteSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区发言ID */
  readonly commentBoardId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** A, A选项; B, B选项 */
  readonly voteKey?: Maybe<Scalars["String"]>;
  /** 投票内容 */
  readonly voteValue?: Maybe<Scalars["String"]>;
};

/** 社区发言投票奖励 */
export type CommentBoardVoteScore = {
  readonly __typename?: "CommentBoardVoteScore";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区发言ID */
  readonly commentBoardId?: Maybe<Scalars["String"]>;
  readonly commentBoardIdObj?: Maybe<CommentBoard>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 人数阈值 */
  readonly userCountLevel?: Maybe<Scalars["Float"]>;
};

/** 社区发言投票奖励 分页查询返回 */
export type CommentBoardVoteScoreList = {
  readonly __typename?: "CommentBoardVoteScoreList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CommentBoardVoteScore>>>;
};

export type CommentBoardVoteScoreSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区发言ID */
  readonly commentBoardId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 人数阈值 */
  readonly userCountLevel?: Maybe<Scalars["Float"]>;
};

/** 社区发言板块管理 */
export type CommentClassify = {
  readonly __typename?: "CommentClassify";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 按钮A显示 */
  readonly buttonA?: Maybe<Scalars["String"]>;
  /** 按钮B显示 */
  readonly buttonB?: Maybe<Scalars["String"]>;
  readonly commentBoardClassifyId?: Maybe<ReadonlyArray<Maybe<CommentBoard>>>;
  readonly commentBoardStatClassifyId?: Maybe<
    ReadonlyArray<Maybe<CommentBoardStat>>
  >;
  /** 内容数量 */
  readonly commentCount?: Maybe<Scalars["Float"]>;
  readonly commentScoreLevelCommentClassifyId?: Maybe<
    ReadonlyArray<Maybe<CommentScoreLevel>>
  >;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 允许删除(Y/N) */
  readonly delAble?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 删除(Y/N) */
  readonly isDel?: Maybe<Scalars["String"]>;
  /** 标签 */
  readonly label?: Maybe<Scalars["String"]>;
  /** 板块名称 */
  readonly name?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 每日发布限制(0, 无限制; 其他, 限制次数) */
  readonly publishLimit?: Maybe<Scalars["Float"]>;
  /** 发布时间 */
  readonly publishTime?: Maybe<Scalars["DateTime"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 开启奖励设置(Y/N) */
  readonly scoreAble?: Maybe<Scalars["String"]>;
  /** 奖励规则(all, 全部; A, A选项; B, B选项) */
  readonly scoreRole?: Maybe<Scalars["String"]>;
  /** 标语 */
  readonly slogan?: Maybe<Scalars["String"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 更新人id{appUser} */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 更新人id{appUser} */
  readonly updatedIdObj?: Maybe<AppUser>;
  /** 参与人数 */
  readonly userCount?: Maybe<Scalars["Float"]>;
  /** 投票标题 */
  readonly voteTitle?: Maybe<Scalars["String"]>;
};

/** 社区发言板块管理 */
export type CommentClassifyCommentBoardClassifyIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 社区发言板块管理 */
export type CommentClassifyCommentBoardStatClassifyIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 社区发言板块管理 */
export type CommentClassifyCommentScoreLevelCommentClassifyIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 社区发言板块管理 分页查询返回 */
export type CommentClassifyList = {
  readonly __typename?: "CommentClassifyList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CommentClassify>>>;
};

export type CommentClassifySaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 按钮A显示 */
  readonly buttonA?: Maybe<Scalars["String"]>;
  /** 按钮B显示 */
  readonly buttonB?: Maybe<Scalars["String"]>;
  readonly commentBoardClassifyId?: Maybe<
    ReadonlyArray<Maybe<CommentBoardSaveIn>>
  >;
  readonly commentBoardStatClassifyId?: Maybe<
    ReadonlyArray<Maybe<CommentBoardStatSaveIn>>
  >;
  /** 内容数量 */
  readonly commentCount?: Maybe<Scalars["Float"]>;
  readonly commentScoreLevelCommentClassifyId?: Maybe<
    ReadonlyArray<Maybe<CommentScoreLevelSaveIn>>
  >;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 允许删除(Y/N) */
  readonly delAble?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 删除(Y/N) */
  readonly isDel?: Maybe<Scalars["String"]>;
  /** 标签 */
  readonly label?: Maybe<Scalars["String"]>;
  /** 板块名称 */
  readonly name?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 每日发布限制(0, 无限制; 其他, 限制次数) */
  readonly publishLimit?: Maybe<Scalars["Float"]>;
  /** 发布时间 */
  readonly publishTime?: Maybe<Scalars["DateTime"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 开启奖励设置(Y/N) */
  readonly scoreAble?: Maybe<Scalars["String"]>;
  /** 奖励规则(all, 全部; A, A选项; B, B选项) */
  readonly scoreRole?: Maybe<Scalars["String"]>;
  /** 标语 */
  readonly slogan?: Maybe<Scalars["String"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 更新人id{appUser} */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 参与人数 */
  readonly userCount?: Maybe<Scalars["Float"]>;
  /** 投票标题 */
  readonly voteTitle?: Maybe<Scalars["String"]>;
};

/** 社区发言图片表 */
export type CommentImage = {
  readonly __typename?: "CommentImage";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 留言ID */
  readonly commentBoardId?: Maybe<Scalars["String"]>;
  readonly commentBoardIdObj?: Maybe<CommentBoard>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 社区发言图片表 分页查询返回 */
export type CommentImageList = {
  readonly __typename?: "CommentImageList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CommentImage>>>;
};

export type CommentImageSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 留言ID */
  readonly commentBoardId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 社区发言板块奖励阶段 */
export type CommentScoreLevel = {
  readonly __typename?: "CommentScoreLevel";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 板块名称 */
  readonly commentClassifyId?: Maybe<Scalars["String"]>;
  readonly commentClassifyIdObj?: Maybe<CommentClassify>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 达人值奖励 */
  readonly experience?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 石分宝奖励 */
  readonly stoneScore?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 人数阈值 */
  readonly userCountLevel?: Maybe<Scalars["Float"]>;
};

/** 社区发言板块奖励阶段 分页查询返回 */
export type CommentScoreLevelList = {
  readonly __typename?: "CommentScoreLevelList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CommentScoreLevel>>>;
};

export type CommentScoreLevelSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 板块名称 */
  readonly commentClassifyId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 达人值奖励 */
  readonly experience?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 石分宝奖励 */
  readonly stoneScore?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 人数阈值 */
  readonly userCountLevel?: Maybe<Scalars["Float"]>;
};

/** 社区点亮值 */
export type CommunityUpvote = {
  readonly __typename?: "CommunityUpvote";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  readonly communityIdObj?: Maybe<AddressLibrary>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 历史点亮值 */
  readonly hisUpvoteVal?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  readonly streetIdObj?: Maybe<AddressLibrary>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 点亮值 */
  readonly upvoteVal?: Maybe<Scalars["Float"]>;
  /** 已用点亮值 */
  readonly useUpvoteVal?: Maybe<Scalars["Float"]>;
};

/** 社区点亮值兑换记录 */
export type CommunityUpvoteActivity = {
  readonly __typename?: "CommunityUpvoteActivity";
  /** 活动名称 */
  readonly activityName?: Maybe<Scalars["String"]>;
  /** 活动地点 */
  readonly address?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  readonly communityIdObj?: Maybe<AddressLibrary>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 负责人 */
  readonly dutyPerson?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 电话 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 兑换记录ID */
  readonly upvoteRecordId?: Maybe<Scalars["String"]>;
  readonly upvoteRecordIdObj?: Maybe<UpvoteRecord>;
};

/** 社区点亮值兑换记录 分页查询返回 */
export type CommunityUpvoteActivityList = {
  readonly __typename?: "CommunityUpvoteActivityList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CommunityUpvoteActivity>>>;
};

export type CommunityUpvoteActivitySaveIn = {
  /** 活动名称 */
  readonly activityName?: Maybe<Scalars["String"]>;
  /** 活动地点 */
  readonly address?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 负责人 */
  readonly dutyPerson?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 电话 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 兑换记录ID */
  readonly upvoteRecordId?: Maybe<Scalars["String"]>;
};

/** 社区点亮值 分页查询返回 */
export type CommunityUpvoteList = {
  readonly __typename?: "CommunityUpvoteList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CommunityUpvote>>>;
};

export type CommunityUpvoteSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 历史点亮值 */
  readonly hisUpvoteVal?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 点亮值 */
  readonly upvoteVal?: Maybe<Scalars["Float"]>;
  /** 已用点亮值 */
  readonly useUpvoteVal?: Maybe<Scalars["Float"]>;
};

/** 店铺列表 */
export type CooperationMerchant = {
  readonly __typename?: "CooperationMerchant";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  readonly cooperationMerchantCouponCooperationMerchantId?: Maybe<
    ReadonlyArray<Maybe<CooperationMerchantCoupon>>
  >;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 商户地址 */
  readonly merchantAddress?: Maybe<Scalars["String"]>;
  /** 字典ID(商户分类) */
  readonly merchantClassify?: Maybe<Scalars["String"]>;
  readonly merchantClassifyObj?: Maybe<DataDictionarySystem>;
  /** 商户联系人 */
  readonly merchantContact?: Maybe<Scalars["String"]>;
  /** 商户名称 */
  readonly merchantName?: Maybe<Scalars["String"]>;
  /** 联系电话 */
  readonly merchantPhone?: Maybe<Scalars["String"]>;
  /** 京东PIN */
  readonly merchantPin?: Maybe<Scalars["String"]>;
  /** 商户介绍 */
  readonly merchantRemark?: Maybe<Scalars["String"]>;
  /** 商户状态(启用/禁用, Y/N) */
  readonly merchantStatus?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 店铺列表 */
export type CooperationMerchantCooperationMerchantCouponCooperationMerchantIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 门店券 */
export type CooperationMerchantCoupon = {
  readonly __typename?: "CooperationMerchantCoupon";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 门店ID */
  readonly cooperationMerchantId?: Maybe<Scalars["String"]>;
  readonly cooperationMerchantIdObj?: Maybe<CooperationMerchant>;
  /** 套餐内容 */
  readonly couponContext?: Maybe<Scalars["String"]>;
  /** 券总数(发放数量) */
  readonly couponCount?: Maybe<Scalars["Float"]>;
  /** 券描述 */
  readonly couponDescribe?: Maybe<Scalars["String"]>;
  /** 是否有兑换限制(Y/N) */
  readonly couponEnable?: Maybe<Scalars["String"]>;
  /** 兑换限制(days: 1, limit: 1) */
  readonly couponLimit?: Maybe<Scalars["JSONObject"]>;
  /** 券名称 */
  readonly couponName?: Maybe<Scalars["String"]>;
  readonly couponOrderMerchantCouponId?: Maybe<
    ReadonlyArray<Maybe<CouponOrder>>
  >;
  /** 券价格 */
  readonly couponPrice?: Maybe<Scalars["Float"]>;
  readonly couponQrcodeComboSaleMerchantCouponId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeComboSale>>
  >;
  readonly couponQrcodeExchangeMerchantCouponId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeExchange>>
  >;
  readonly couponQrcodeSpecialOffersMerchantCouponId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeSpecialOffers>>
  >;
  /** 兑换须知 */
  readonly couponRemark?: Maybe<Scalars["String"]>;
  /** 已领取 */
  readonly couponSigned?: Maybe<Scalars["Float"]>;
  /** 券状态(启用/禁用, Y/N) */
  readonly couponStatus?: Maybe<Scalars["String"]>;
  /** 券类型(comboSale, 套餐券; exchange, 通兑券; specialOffers, 满减券) */
  readonly couponType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 有效期开始时间 */
  readonly validityBTime?: Maybe<Scalars["DateTime"]>;
  /** 有效期天数 */
  readonly validityDays?: Maybe<Scalars["Float"]>;
  /** 有效期结束时间 */
  readonly validityETime?: Maybe<Scalars["DateTime"]>;
};

/** 门店券 */
export type CooperationMerchantCouponCouponOrderMerchantCouponIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 门店券 */
export type CooperationMerchantCouponCouponQrcodeComboSaleMerchantCouponIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 门店券 */
export type CooperationMerchantCouponCouponQrcodeExchangeMerchantCouponIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 门店券 */
export type CooperationMerchantCouponCouponQrcodeSpecialOffersMerchantCouponIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 门店券 分页查询返回 */
export type CooperationMerchantCouponList = {
  readonly __typename?: "CooperationMerchantCouponList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CooperationMerchantCoupon>>>;
};

export type CooperationMerchantCouponSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 门店ID */
  readonly cooperationMerchantId?: Maybe<Scalars["String"]>;
  /** 套餐内容 */
  readonly couponContext?: Maybe<Scalars["String"]>;
  /** 券总数(发放数量) */
  readonly couponCount?: Maybe<Scalars["Float"]>;
  /** 券描述 */
  readonly couponDescribe?: Maybe<Scalars["String"]>;
  /** 是否有兑换限制(Y/N) */
  readonly couponEnable?: Maybe<Scalars["String"]>;
  /** 兑换限制(days: 1, limit: 1) */
  readonly couponLimit?: Maybe<Scalars["JSONObject"]>;
  /** 券名称 */
  readonly couponName?: Maybe<Scalars["String"]>;
  readonly couponOrderMerchantCouponId?: Maybe<
    ReadonlyArray<Maybe<CouponOrderSaveIn>>
  >;
  /** 券价格 */
  readonly couponPrice?: Maybe<Scalars["Float"]>;
  readonly couponQrcodeComboSaleMerchantCouponId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeComboSaleSaveIn>>
  >;
  readonly couponQrcodeExchangeMerchantCouponId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeExchangeSaveIn>>
  >;
  readonly couponQrcodeSpecialOffersMerchantCouponId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeSpecialOffersSaveIn>>
  >;
  /** 兑换须知 */
  readonly couponRemark?: Maybe<Scalars["String"]>;
  /** 已领取 */
  readonly couponSigned?: Maybe<Scalars["Float"]>;
  /** 券状态(启用/禁用, Y/N) */
  readonly couponStatus?: Maybe<Scalars["String"]>;
  /** 券类型(comboSale, 套餐券; exchange, 通兑券; specialOffers, 满减券) */
  readonly couponType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 有效期开始时间 */
  readonly validityBTime?: Maybe<Scalars["DateTime"]>;
  /** 有效期天数 */
  readonly validityDays?: Maybe<Scalars["Float"]>;
  /** 有效期结束时间 */
  readonly validityETime?: Maybe<Scalars["DateTime"]>;
};

/** 店铺列表 分页查询返回 */
export type CooperationMerchantList = {
  readonly __typename?: "CooperationMerchantList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CooperationMerchant>>>;
};

export type CooperationMerchantSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  readonly cooperationMerchantCouponCooperationMerchantId?: Maybe<
    ReadonlyArray<Maybe<CooperationMerchantCouponSaveIn>>
  >;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 商户地址 */
  readonly merchantAddress?: Maybe<Scalars["String"]>;
  /** 字典ID(商户分类) */
  readonly merchantClassify?: Maybe<Scalars["String"]>;
  /** 商户联系人 */
  readonly merchantContact?: Maybe<Scalars["String"]>;
  /** 商户名称 */
  readonly merchantName?: Maybe<Scalars["String"]>;
  /** 联系电话 */
  readonly merchantPhone?: Maybe<Scalars["String"]>;
  /** 京东PIN */
  readonly merchantPin?: Maybe<Scalars["String"]>;
  /** 商户介绍 */
  readonly merchantRemark?: Maybe<Scalars["String"]>;
  /** 商户状态(启用/禁用, Y/N) */
  readonly merchantStatus?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 门店券-优惠套餐-发放 */
export type CouponGrantComboSale = {
  readonly __typename?: "CouponGrantComboSale";
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  /** 票券ID */
  readonly couponQrcodeId?: Maybe<Scalars["String"]>;
  readonly couponQrcodeIdObj?: Maybe<CouponQrcodeComboSale>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 门店券ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 门店券-优惠套餐-发放 分页查询返回 */
export type CouponGrantComboSaleList = {
  readonly __typename?: "CouponGrantComboSaleList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CouponGrantComboSale>>>;
};

export type CouponGrantComboSaleSaveIn = {
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  /** 票券ID */
  readonly couponQrcodeId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 门店券ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 门店券-通兑券-发放 */
export type CouponGrantExchange = {
  readonly __typename?: "CouponGrantExchange";
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  /** 门店券ID */
  readonly couponQrcodeId?: Maybe<Scalars["String"]>;
  readonly couponQrcodeIdObj?: Maybe<CouponQrcodeExchange>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 门店券ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 门店券-通兑券-发放 分页查询返回 */
export type CouponGrantExchangeList = {
  readonly __typename?: "CouponGrantExchangeList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CouponGrantExchange>>>;
};

export type CouponGrantExchangeSaveIn = {
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  /** 门店券ID */
  readonly couponQrcodeId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 门店券ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 门店券-满减券-发放 */
export type CouponGrantSpecialOffers = {
  readonly __typename?: "CouponGrantSpecialOffers";
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  /** 门店券ID */
  readonly couponQrcodeId?: Maybe<Scalars["String"]>;
  readonly couponQrcodeIdObj?: Maybe<CouponQrcodeSpecialOffers>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 门店券ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 门店券-满减券-发放 分页查询返回 */
export type CouponGrantSpecialOffersList = {
  readonly __typename?: "CouponGrantSpecialOffersList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CouponGrantSpecialOffers>>>;
};

export type CouponGrantSpecialOffersSaveIn = {
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  /** 门店券ID */
  readonly couponQrcodeId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 门店券ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 门店券订单列表 */
export type CouponOrder = {
  readonly __typename?: "CouponOrder";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 套餐内容 */
  readonly comboDetails?: Maybe<Scalars["String"]>;
  /** 券数量 */
  readonly couponCount?: Maybe<Scalars["Float"]>;
  /** 券描述 */
  readonly couponDescribe?: Maybe<Scalars["String"]>;
  /** 券名称 */
  readonly couponName?: Maybe<Scalars["String"]>;
  readonly couponOrderLogCouponOrderId?: Maybe<
    ReadonlyArray<Maybe<CouponOrderLog>>
  >;
  /** 券单价 */
  readonly couponPrice?: Maybe<Scalars["String"]>;
  readonly couponQrcodeComboSaleCouponOrderId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeComboSale>>
  >;
  readonly couponQrcodeExchangeCouponOrderId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeExchange>>
  >;
  readonly couponQrcodeSpecialOffersCouponOrderId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeSpecialOffers>>
  >;
  /** 兑换须知 */
  readonly couponRemark?: Maybe<Scalars["String"]>;
  /** 券类型(comboSale, 套餐券; exchange, 通兑券; specialOffers, 满减券) */
  readonly couponType?: Maybe<Scalars["String"]>;
  /** 券已使用数量 */
  readonly couponUsed?: Maybe<Scalars["Float"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 商户地址 */
  readonly merchantAddress?: Maybe<Scalars["String"]>;
  /** 门店券主记录ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  readonly merchantCouponIdObj?: Maybe<CooperationMerchantCoupon>;
  /** 商户名称 */
  readonly merchantName?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 订单来源(wellChosen, 精选) */
  readonly orderOrigin?: Maybe<Scalars["String"]>;
  /** 订单状态(useable, 可使用; used, 已使用; expired, 已过期) */
  readonly orderStatus?: Maybe<Scalars["String"]>;
  /** 订单类型(merchant, 门店券) */
  readonly orderType?: Maybe<Scalars["String"]>;
  /** 总支付金额 */
  readonly paymentAmount?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 门店券订单列表 */
export type CouponOrderCouponOrderLogCouponOrderIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 门店券订单列表 */
export type CouponOrderCouponQrcodeComboSaleCouponOrderIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 门店券订单列表 */
export type CouponOrderCouponQrcodeExchangeCouponOrderIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 门店券订单列表 */
export type CouponOrderCouponQrcodeSpecialOffersCouponOrderIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 门店券订单列表 分页查询返回 */
export type CouponOrderList = {
  readonly __typename?: "CouponOrderList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CouponOrder>>>;
};

/** 门店券订单日志 */
export type CouponOrderLog = {
  readonly __typename?: "CouponOrderLog";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 内容(sended, 已发货; received, 已收货; cancel, 取消订单) */
  readonly content?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  readonly couponOrderIdObj?: Maybe<CouponOrder>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 门店券订单日志 分页查询返回 */
export type CouponOrderLogList = {
  readonly __typename?: "CouponOrderLogList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CouponOrderLog>>>;
};

export type CouponOrderLogSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 内容(sended, 已发货; received, 已收货; cancel, 取消订单) */
  readonly content?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type CouponOrderSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 套餐内容 */
  readonly comboDetails?: Maybe<Scalars["String"]>;
  /** 券数量 */
  readonly couponCount?: Maybe<Scalars["Float"]>;
  /** 券描述 */
  readonly couponDescribe?: Maybe<Scalars["String"]>;
  /** 券名称 */
  readonly couponName?: Maybe<Scalars["String"]>;
  readonly couponOrderLogCouponOrderId?: Maybe<
    ReadonlyArray<Maybe<CouponOrderLogSaveIn>>
  >;
  /** 券单价 */
  readonly couponPrice?: Maybe<Scalars["String"]>;
  readonly couponQrcodeComboSaleCouponOrderId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeComboSaleSaveIn>>
  >;
  readonly couponQrcodeExchangeCouponOrderId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeExchangeSaveIn>>
  >;
  readonly couponQrcodeSpecialOffersCouponOrderId?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeSpecialOffersSaveIn>>
  >;
  /** 兑换须知 */
  readonly couponRemark?: Maybe<Scalars["String"]>;
  /** 券类型(comboSale, 套餐券; exchange, 通兑券; specialOffers, 满减券) */
  readonly couponType?: Maybe<Scalars["String"]>;
  /** 券已使用数量 */
  readonly couponUsed?: Maybe<Scalars["Float"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 商户地址 */
  readonly merchantAddress?: Maybe<Scalars["String"]>;
  /** 门店券主记录ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  /** 商户名称 */
  readonly merchantName?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 订单来源(wellChosen, 精选) */
  readonly orderOrigin?: Maybe<Scalars["String"]>;
  /** 订单状态(useable, 可使用; used, 已使用; expired, 已过期) */
  readonly orderStatus?: Maybe<Scalars["String"]>;
  /** 订单类型(merchant, 门店券) */
  readonly orderType?: Maybe<Scalars["String"]>;
  /** 总支付金额 */
  readonly paymentAmount?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 门店券-优惠套餐 */
export type CouponQrcodeComboSale = {
  readonly __typename?: "CouponQrcodeComboSale";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  readonly couponOrderIdObj?: Maybe<CouponOrder>;
  /** 券使用时间 */
  readonly couponUsedTime?: Maybe<Scalars["DateTime"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 商户门店券记录ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  readonly merchantCouponIdObj?: Maybe<CooperationMerchantCoupon>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 使用状态(unclaimed, 未领取; unused, 未使用; used, 已使用; expired, 已过期) */
  readonly useStatus?: Maybe<Scalars["String"]>;
  /** 有效期开始时间 */
  readonly validityBTime?: Maybe<Scalars["DateTime"]>;
  /** 有效期结束时间 */
  readonly validityETime?: Maybe<Scalars["DateTime"]>;
};

/** 门店券-优惠套餐 分页查询返回 */
export type CouponQrcodeComboSaleList = {
  readonly __typename?: "CouponQrcodeComboSaleList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CouponQrcodeComboSale>>>;
};

export type CouponQrcodeComboSaleSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  /** 券使用时间 */
  readonly couponUsedTime?: Maybe<Scalars["DateTime"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 商户门店券记录ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 使用状态(unclaimed, 未领取; unused, 未使用; used, 已使用; expired, 已过期) */
  readonly useStatus?: Maybe<Scalars["String"]>;
  /** 有效期开始时间 */
  readonly validityBTime?: Maybe<Scalars["DateTime"]>;
  /** 有效期结束时间 */
  readonly validityETime?: Maybe<Scalars["DateTime"]>;
};

/** 门店券-通兑券 */
export type CouponQrcodeExchange = {
  readonly __typename?: "CouponQrcodeExchange";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  readonly couponOrderIdObj?: Maybe<CouponOrder>;
  /** 券使用时间 */
  readonly couponUsedTime?: Maybe<Scalars["DateTime"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 商户门店券记录ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  readonly merchantCouponIdObj?: Maybe<CooperationMerchantCoupon>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 使用状态(unclaimed, 未领取; unused, 未使用; used, 已使用; expired, 已过期) */
  readonly useStatus?: Maybe<Scalars["String"]>;
  /** 有效期开始时间 */
  readonly validityBTime?: Maybe<Scalars["DateTime"]>;
  /** 有效期结束时间 */
  readonly validityETime?: Maybe<Scalars["DateTime"]>;
};

/** 门店券-通兑券 分页查询返回 */
export type CouponQrcodeExchangeList = {
  readonly __typename?: "CouponQrcodeExchangeList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CouponQrcodeExchange>>>;
};

export type CouponQrcodeExchangeSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  /** 券使用时间 */
  readonly couponUsedTime?: Maybe<Scalars["DateTime"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 商户门店券记录ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 使用状态(unclaimed, 未领取; unused, 未使用; used, 已使用; expired, 已过期) */
  readonly useStatus?: Maybe<Scalars["String"]>;
  /** 有效期开始时间 */
  readonly validityBTime?: Maybe<Scalars["DateTime"]>;
  /** 有效期结束时间 */
  readonly validityETime?: Maybe<Scalars["DateTime"]>;
};

/** 门店券-满减券 */
export type CouponQrcodeSpecialOffers = {
  readonly __typename?: "CouponQrcodeSpecialOffers";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  readonly couponOrderIdObj?: Maybe<CouponOrder>;
  /** 券使用时间 */
  readonly couponUsedTime?: Maybe<Scalars["DateTime"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 商户门店券记录ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  readonly merchantCouponIdObj?: Maybe<CooperationMerchantCoupon>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 使用状态(unclaimed, 未领取; unused, 未使用; used, 已使用; expired, 已过期) */
  readonly useStatus?: Maybe<Scalars["String"]>;
  /** 有效期开始时间 */
  readonly validityBTime?: Maybe<Scalars["DateTime"]>;
  /** 有效期结束时间 */
  readonly validityETime?: Maybe<Scalars["DateTime"]>;
};

/** 门店券-满减券 分页查询返回 */
export type CouponQrcodeSpecialOffersList = {
  readonly __typename?: "CouponQrcodeSpecialOffersList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CouponQrcodeSpecialOffers>>>;
};

export type CouponQrcodeSpecialOffersSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly couponOrderId?: Maybe<Scalars["String"]>;
  /** 券使用时间 */
  readonly couponUsedTime?: Maybe<Scalars["DateTime"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 商户门店券记录ID */
  readonly merchantCouponId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 使用状态(unclaimed, 未领取; unused, 未使用; used, 已使用; expired, 已过期) */
  readonly useStatus?: Maybe<Scalars["String"]>;
  /** 有效期开始时间 */
  readonly validityBTime?: Maybe<Scalars["DateTime"]>;
  /** 有效期结束时间 */
  readonly validityETime?: Maybe<Scalars["DateTime"]>;
};

/** 货币兑换比率 */
export type CurrencyExchangeRate = {
  readonly __typename?: "CurrencyExchangeRate";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 兑换目标(RMB, 人民币; shifenPoints, 石分社区积分; stoneScore, 石分宝; jdCoin, 京东绿豆) */
  readonly exchangeDst?: Maybe<Scalars["String"]>;
  /** 所得值 */
  readonly exchangeDstValue?: Maybe<Scalars["Float"]>;
  /** 兑换源(RMB, 人民币; shifenPoints, 石分社区积分; stoneScore, 石分宝; jdCoin, 京东绿豆) */
  readonly exchangeSrc?: Maybe<Scalars["String"]>;
  /** 兑换值 */
  readonly exchangeSrcValue?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 货币兑换比率 分页查询返回 */
export type CurrencyExchangeRateList = {
  readonly __typename?: "CurrencyExchangeRateList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<CurrencyExchangeRate>>>;
};

export type CurrencyExchangeRateSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 兑换目标(RMB, 人民币; shifenPoints, 石分社区积分; stoneScore, 石分宝; jdCoin, 京东绿豆) */
  readonly exchangeDst?: Maybe<Scalars["String"]>;
  /** 所得值 */
  readonly exchangeDstValue?: Maybe<Scalars["Float"]>;
  /** 兑换源(RMB, 人民币; shifenPoints, 石分社区积分; stoneScore, 石分宝; jdCoin, 京东绿豆) */
  readonly exchangeSrc?: Maybe<Scalars["String"]>;
  /** 兑换值 */
  readonly exchangeSrcValue?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 系统设置字典库 */
export type DataDictionarySystem = {
  readonly __typename?: "DataDictionarySystem";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** code硬编码(physicalGoods, 实物; recharge, 充值; stoneScore, 石分宝; experience, 达人值; thanks, 谢谢参与) */
  readonly code?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly groupShoppingGoodsSysDictionaryId?: Maybe<
    ReadonlyArray<Maybe<GroupShoppingGoods>>
  >;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 类别(activityClassify, 活动分类; articleTags, 文章标签; groupShoppingGoodsType, 商品分类; shoppingGoodsCategory, 商品类目) */
  readonly key?: Maybe<Scalars["String"]>;
  /** 级别 */
  readonly level?: Maybe<Scalars["Float"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 父级id */
  readonly parentId?: Maybe<Scalars["String"]>;
  readonly parentIdObj?: Maybe<DataDictionarySystem>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly shoppingGoodsDataDictionarySystemId?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoods>>
  >;
  /** 状态, (启用/禁用, Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 值 */
  readonly value?: Maybe<Scalars["String"]>;
};

/** 系统设置字典库 */
export type DataDictionarySystemGroupShoppingGoodsSysDictionaryIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 系统设置字典库 */
export type DataDictionarySystemShoppingGoodsDataDictionarySystemIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 系统设置字典库 分页查询返回 */
export type DataDictionarySystemList = {
  readonly __typename?: "DataDictionarySystemList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<DataDictionarySystem>>>;
};

export type DataDictionarySystemSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** code硬编码(physicalGoods, 实物; recharge, 充值; stoneScore, 石分宝; experience, 达人值; thanks, 谢谢参与) */
  readonly code?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  readonly dataDictionarySystemParentId?: Maybe<
    ReadonlyArray<Maybe<DataDictionarySystemSaveIn>>
  >;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly groupShoppingGoodsSysDictionaryId?: Maybe<
    ReadonlyArray<Maybe<GroupShoppingGoodsSaveIn>>
  >;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 类别(activityClassify, 活动分类; articleTags, 文章标签; groupShoppingGoodsType, 商品分类; shoppingGoodsCategory, 商品类目) */
  readonly key?: Maybe<Scalars["String"]>;
  /** 级别 */
  readonly level?: Maybe<Scalars["Float"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 父级id */
  readonly parentId?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly shoppingGoodsDataDictionarySystemId?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoodsSaveIn>>
  >;
  /** 状态, (启用/禁用, Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 值 */
  readonly value?: Maybe<Scalars["String"]>;
};

/** 南水工程demo */
export type DemoWater = {
  readonly __typename?: "DemoWater";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 数据集 */
  readonly jsonValue?: Maybe<Scalars["JSONObject"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 手机号 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 南水工程demo 分页查询返回 */
export type DemoWaterList = {
  readonly __typename?: "DemoWaterList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<DemoWater>>>;
};

export type DemoWaterSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 数据集 */
  readonly jsonValue?: Maybe<Scalars["JSONObject"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 手机号 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 公众号关注用户号 */
export type EmsCnplAttention = {
  readonly __typename?: "EmsCnplAttention";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 当前关注状态(Y/N) */
  readonly attentionStatus?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 微信openid */
  readonly openid?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 微信unionid */
  readonly unionid?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 公众号关注用户号 分页查询返回 */
export type EmsCnplAttentionList = {
  readonly __typename?: "EmsCnplAttentionList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<EmsCnplAttention>>>;
};

export type EmsCnplAttentionSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 当前关注状态(Y/N) */
  readonly attentionStatus?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 微信openid */
  readonly openid?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 微信unionid */
  readonly unionid?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 文件上传记录表 */
export type File = {
  readonly __typename?: "File";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 编码 */
  readonly encoding?: Maybe<Scalars["String"]>;
  /** 字断名 */
  readonly fieldname?: Maybe<Scalars["String"]>;
  /** 文件名 */
  readonly filename?: Maybe<Scalars["String"]>;
  /** tmp 文件路径 */
  readonly filepath?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名称 */
  readonly mime?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** oss上传完整路径 */
  readonly ossFilepath?: Maybe<Scalars["String"]>;
  /** oss上传文件id名字 */
  readonly ossName?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 文件上传记录表 分页查询返回 */
export type FileList = {
  readonly __typename?: "FileList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<File>>>;
};

export type FileSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 编码 */
  readonly encoding?: Maybe<Scalars["String"]>;
  /** 字断名 */
  readonly fieldname?: Maybe<Scalars["String"]>;
  /** 文件名 */
  readonly filename?: Maybe<Scalars["String"]>;
  /** tmp 文件路径 */
  readonly filepath?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名称 */
  readonly mime?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** oss上传完整路径 */
  readonly ossFilepath?: Maybe<Scalars["String"]>;
  /** oss上传文件id名字 */
  readonly ossName?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type FindAllOptions = {
  readonly attributes?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly group?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly having?: Maybe<Scalars["JSONObject"]>;
  readonly include?: Maybe<ReadonlyArray<Maybe<Include>>>;
  readonly limit?: Maybe<Scalars["Int"]>;
  readonly offset?: Maybe<Scalars["Int"]>;
  readonly order?: Maybe<
    ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>>
  >;
  readonly raw?: Maybe<Scalars["Boolean"]>;
  readonly where?: Maybe<Scalars["JSONObject"]>;
};

/** 备注 */
export type FrontEndCache = {
  readonly __typename?: "FrontEndCache";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 日期 */
  readonly date?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** json值 */
  readonly jsonValue?: Maybe<Scalars["JSONObject"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 类型 */
  readonly type?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 值 */
  readonly value?: Maybe<Scalars["String"]>;
};

/** 备注 分页查询返回 */
export type FrontEndCacheList = {
  readonly __typename?: "FrontEndCacheList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<FrontEndCache>>>;
};

export type FrontEndCacheSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 日期 */
  readonly date?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** json值 */
  readonly jsonValue?: Maybe<Scalars["JSONObject"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 类型 */
  readonly type?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 值 */
  readonly value?: Maybe<Scalars["String"]>;
};

/** 绿景积分记录表 */
export type GreenViewPoints = {
  readonly __typename?: "GreenViewPoints";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** card_code */
  readonly cardCode?: Maybe<Scalars["String"]>;
  /** card_id */
  readonly cardId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly gvRemark?: Maybe<Scalars["String"]>;
  /** 状态 */
  readonly gvStatus?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 消息id */
  readonly msgId?: Maybe<Scalars["String"]>;
  /** 第三方订单id */
  readonly orderId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 其他 */
  readonly other?: Maybe<Scalars["JSONObject"]>;
  /** 积分 */
  readonly points?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 绿景积分记录表 分页查询返回 */
export type GreenViewPointsList = {
  readonly __typename?: "GreenViewPointsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<GreenViewPoints>>>;
};

export type GreenViewPointsSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** card_code */
  readonly cardCode?: Maybe<Scalars["String"]>;
  /** card_id */
  readonly cardId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly gvRemark?: Maybe<Scalars["String"]>;
  /** 状态 */
  readonly gvStatus?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 消息id */
  readonly msgId?: Maybe<Scalars["String"]>;
  /** 第三方订单id */
  readonly orderId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 其他 */
  readonly other?: Maybe<Scalars["JSONObject"]>;
  /** 积分 */
  readonly points?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 商品包 */
export type GroupShoppingGoods = {
  readonly __typename?: "GroupShoppingGoods";
  /** 商品编码业务编码 */
  readonly barCode?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 兑换说明 */
  readonly cashRemarks?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 失效时间为空则永不失效 */
  readonly failureTime?: Maybe<Scalars["DateTime"]>;
  /** 商品上下架状态 Y,上架;N,下架 */
  readonly goodsStatus?: Maybe<Scalars["String"]>;
  /** 商品包类型(base, 基础商品包; lottery, 抽奖; shopping, 商城; qixiLottery, 七夕抽奖; qixiCentCash, 七夕一分购; qixiGoods, 七夕商城; snatchTreasure, 夺宝; upvoteValCommunity, 社区助力; integralStoneGoods, 便民商城; jdongShop, 精选商城; midAutLottery, 中秋抽奖) */
  readonly groupType?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 备用字段 */
  readonly jsonData?: Maybe<Scalars["JSONObject"]>;
  /** 兑换商品所需级别 */
  readonly levelNeed?: Maybe<Scalars["Float"]>;
  /** 抽奖活动ID */
  readonly lotteryActivityId?: Maybe<Scalars["String"]>;
  readonly lotteryActivityIdObj?: Maybe<LotteryDrawActivity>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 概率抽奖用 */
  readonly probability?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 限制下单数量0不限制 */
  readonly restrictions?: Maybe<Scalars["Float"]>;
  /** 商品id */
  readonly shoppingGoodsId?: Maybe<Scalars["String"]>;
  readonly shoppingGoodsIdObj?: Maybe<ShoppingGoods>;
  readonly shoppingGoodsStockGroupShoppingGoodsId?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoodsStock>>
  >;
  /** 商品售价(根据商品包类型区分) */
  readonly shoppingPrice?: Maybe<Scalars["Float"]>;
  readonly snatchTreasureGroupGoodsId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasure>>
  >;
  /** 库存剩余数量(下单锁库存，支付减库存，取消关闭释放库存) */
  readonly stock?: Maybe<Scalars["Float"]>;
  /** 字典ID(商品分类) */
  readonly sysDictionaryId?: Maybe<Scalars["String"]>;
  readonly sysDictionaryIdObj?: Maybe<DataDictionarySystem>;
  /** 商品类型(physicalGoods, 实物; recharge, 充值; stoneScore, 石分宝; experience, 达人值; thanks, 谢谢参与) */
  readonly systemType?: Maybe<Scalars["String"]>;
  /** 生效时间 */
  readonly takeTime?: Maybe<Scalars["DateTime"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 商品包 */
export type GroupShoppingGoodsShoppingGoodsStockGroupShoppingGoodsIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 商品包 */
export type GroupShoppingGoodsSnatchTreasureGroupGoodsIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 商品包 分页查询返回 */
export type GroupShoppingGoodsList = {
  readonly __typename?: "GroupShoppingGoodsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<GroupShoppingGoods>>>;
};

/** 商品包采购入库单 */
export type GroupShoppingGoodsOrder = {
  readonly __typename?: "GroupShoppingGoodsOrder";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 供应商 */
  readonly company?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly shoppingGoodsStockGroupShoppingGoodsOrderId?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoodsStock>>
  >;
  /** 采购类型(purchase, 采购入库) */
  readonly stockType?: Maybe<Scalars["String"]>;
  /** 入库仓库 */
  readonly storageType?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 商品包采购入库单 */
export type GroupShoppingGoodsOrderShoppingGoodsStockGroupShoppingGoodsOrderIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 商品包采购入库单 分页查询返回 */
export type GroupShoppingGoodsOrderList = {
  readonly __typename?: "GroupShoppingGoodsOrderList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<GroupShoppingGoodsOrder>>>;
};

export type GroupShoppingGoodsOrderSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 供应商 */
  readonly company?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly shoppingGoodsStockGroupShoppingGoodsOrderId?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoodsStockSaveIn>>
  >;
  /** 采购类型(purchase, 采购入库) */
  readonly stockType?: Maybe<Scalars["String"]>;
  /** 入库仓库 */
  readonly storageType?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type GroupShoppingGoodsSaveIn = {
  /** 商品编码业务编码 */
  readonly barCode?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 兑换说明 */
  readonly cashRemarks?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 失效时间为空则永不失效 */
  readonly failureTime?: Maybe<Scalars["DateTime"]>;
  /** 商品上下架状态 Y,上架;N,下架 */
  readonly goodsStatus?: Maybe<Scalars["String"]>;
  /** 商品包类型(base, 基础商品包; lottery, 抽奖; shopping, 商城; qixiLottery, 七夕抽奖; qixiCentCash, 七夕一分购; qixiGoods, 七夕商城; snatchTreasure, 夺宝; upvoteValCommunity, 社区助力; integralStoneGoods, 便民商城; jdongShop, 精选商城; midAutLottery, 中秋抽奖) */
  readonly groupType?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 备用字段 */
  readonly jsonData?: Maybe<Scalars["JSONObject"]>;
  /** 兑换商品所需级别 */
  readonly levelNeed?: Maybe<Scalars["Float"]>;
  /** 抽奖活动ID */
  readonly lotteryActivityId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 概率抽奖用 */
  readonly probability?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 限制下单数量0不限制 */
  readonly restrictions?: Maybe<Scalars["Float"]>;
  /** 商品id */
  readonly shoppingGoodsId?: Maybe<Scalars["String"]>;
  readonly shoppingGoodsStockGroupShoppingGoodsId?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoodsStockSaveIn>>
  >;
  /** 商品售价(根据商品包类型区分) */
  readonly shoppingPrice?: Maybe<Scalars["Float"]>;
  readonly snatchTreasureGroupGoodsId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureSaveIn>>
  >;
  /** 库存剩余数量(下单锁库存，支付减库存，取消关闭释放库存) */
  readonly stock?: Maybe<Scalars["Float"]>;
  /** 字典ID(商品分类) */
  readonly sysDictionaryId?: Maybe<Scalars["String"]>;
  /** 商品类型(physicalGoods, 实物; recharge, 充值; stoneScore, 石分宝; experience, 达人值; thanks, 谢谢参与) */
  readonly systemType?: Maybe<Scalars["String"]>;
  /** 生效时间 */
  readonly takeTime?: Maybe<Scalars["DateTime"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 首页入口配置详情 */
export type HomePageDetails = {
  readonly __typename?: "HomePageDetails";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  readonly communityIdObj?: Maybe<AddressLibrary>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 首页配置项ID */
  readonly homePageId?: Maybe<Scalars["String"]>;
  readonly homePageIdObj?: Maybe<HomePageSystem>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  readonly residentialIdObj?: Maybe<AddressLibrary>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  readonly streetIdObj?: Maybe<AddressLibrary>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 首页入口配置详情 分页查询返回 */
export type HomePageDetailsList = {
  readonly __typename?: "HomePageDetailsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<HomePageDetails>>>;
};

export type HomePageDetailsSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 首页配置项ID */
  readonly homePageId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 首页入口配置 */
export type HomePageSystem = {
  readonly __typename?: "HomePageSystem";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly homePageDetailsHomePageId?: Maybe<
    ReadonlyArray<Maybe<HomePageDetails>>
  >;
  readonly homePageSystemImageHomePageId?: Maybe<
    ReadonlyArray<Maybe<HomePageSystemImage>>
  >;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 硬编码 */
  readonly pageCode?: Maybe<Scalars["String"]>;
  /** 页面名称 */
  readonly pageName?: Maybe<Scalars["String"]>;
  /** 页面路径 */
  readonly pagePath?: Maybe<Scalars["String"]>;
  /** 显示区域(all, 全部区域; part, 部分区域) */
  readonly regionWith?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 首页入口配置 */
export type HomePageSystemHomePageDetailsHomePageIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 首页入口配置 */
export type HomePageSystemHomePageSystemImageHomePageIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 首页入口配置图片 */
export type HomePageSystemImage = {
  readonly __typename?: "HomePageSystemImage";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 页面ID */
  readonly homePageId?: Maybe<Scalars["String"]>;
  readonly homePageIdObj?: Maybe<HomePageSystem>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 图片类型(sign, 角标) */
  readonly imageType?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 首页入口配置图片 分页查询返回 */
export type HomePageSystemImageList = {
  readonly __typename?: "HomePageSystemImageList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<HomePageSystemImage>>>;
};

export type HomePageSystemImageSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 页面ID */
  readonly homePageId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 图片类型(sign, 角标) */
  readonly imageType?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 首页入口配置 分页查询返回 */
export type HomePageSystemList = {
  readonly __typename?: "HomePageSystemList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<HomePageSystem>>>;
};

export type HomePageSystemSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly homePageDetailsHomePageId?: Maybe<
    ReadonlyArray<Maybe<HomePageDetailsSaveIn>>
  >;
  readonly homePageSystemImageHomePageId?: Maybe<
    ReadonlyArray<Maybe<HomePageSystemImageSaveIn>>
  >;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 硬编码 */
  readonly pageCode?: Maybe<Scalars["String"]>;
  /** 页面名称 */
  readonly pageName?: Maybe<Scalars["String"]>;
  /** 页面路径 */
  readonly pagePath?: Maybe<Scalars["String"]>;
  /** 显示区域(all, 全部区域; part, 部分区域) */
  readonly regionWith?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 任务奖励设置表 */
export type IncentiveValue = {
  readonly __typename?: "IncentiveValue";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 达人值 */
  readonly experience?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 石分宝 */
  readonly score?: Maybe<Scalars["Float"]>;
  /** 状态, (启用/禁用, Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 副标题 */
  readonly subtitle?: Maybe<Scalars["String"]>;
  /** 任务分类(usual, 日常; activity, 福利) */
  readonly taskClass?: Maybe<Scalars["String"]>;
  /** 任务名称 */
  readonly taskName?: Maybe<Scalars["String"]>;
  /** 任务类型(invite, 邀请注册; complete, 完善信息; read, 阅读文章; shard, 签到分享; comment, 留言; questionnaire, 调查问卷) */
  readonly taskType?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 单日上限(为0时不设置上限) */
  readonly valueLimit?: Maybe<Scalars["Float"]>;
};

/** 任务奖励设置表 分页查询返回 */
export type IncentiveValueList = {
  readonly __typename?: "IncentiveValueList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<IncentiveValue>>>;
};

export type IncentiveValueSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 达人值 */
  readonly experience?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 石分宝 */
  readonly score?: Maybe<Scalars["Float"]>;
  /** 状态, (启用/禁用, Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 副标题 */
  readonly subtitle?: Maybe<Scalars["String"]>;
  /** 任务分类(usual, 日常; activity, 福利) */
  readonly taskClass?: Maybe<Scalars["String"]>;
  /** 任务名称 */
  readonly taskName?: Maybe<Scalars["String"]>;
  /** 任务类型(invite, 邀请注册; complete, 完善信息; read, 阅读文章; shard, 签到分享; comment, 留言; questionnaire, 调查问卷) */
  readonly taskType?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 单日上限(为0时不设置上限) */
  readonly valueLimit?: Maybe<Scalars["Float"]>;
};

export type Include = {
  readonly as?: Maybe<Scalars["String"]>;
  readonly attributes?: Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>;
  readonly include?: Maybe<Include>;
  readonly limit?: Maybe<Scalars["Int"]>;
  readonly model?: Maybe<Scalars["String"]>;
  readonly required?: Maybe<Scalars["Boolean"]>;
  readonly right?: Maybe<Scalars["Boolean"]>;
  readonly where?: Maybe<Scalars["JSONObject"]>;
};

/** 居民卡积分关联表 */
export type InhabitantPointsRelation = {
  readonly __typename?: "InhabitantPointsRelation";
  /** 开始时间 */
  readonly beginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 业务数据ID */
  readonly bussinessId?: Maybe<Scalars["String"]>;
  /** 业务表名称() */
  readonly bussinessType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 居民卡积分记录ID */
  readonly inhaPointsId?: Maybe<Scalars["String"]>;
  readonly inhaPointsIdObj?: Maybe<ShifenCommunityInhabitantPoints>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 重试次数 */
  readonly retryTimes?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 居民卡积分关联表 分页查询返回 */
export type InhabitantPointsRelationList = {
  readonly __typename?: "InhabitantPointsRelationList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<InhabitantPointsRelation>>>;
};

export type InhabitantPointsRelationSaveIn = {
  /** 开始时间 */
  readonly beginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 业务数据ID */
  readonly bussinessId?: Maybe<Scalars["String"]>;
  /** 业务表名称() */
  readonly bussinessType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 居民卡积分记录ID */
  readonly inhaPointsId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 重试次数 */
  readonly retryTimes?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 居民卡积分发放记录 */
export type InhabitantPointsRewardDetails = {
  readonly __typename?: "InhabitantPointsRewardDetails";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 发放记录ID */
  readonly communityRecordId?: Maybe<Scalars["String"]>;
  readonly communityRecordIdObj?: Maybe<ShifenCommunityPoints>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 居民卡id */
  readonly inhabitantId?: Maybe<Scalars["String"]>;
  readonly inhabitantIdObj?: Maybe<ShifenCommunityInhabitantCard>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 支出居民卡积分 */
  readonly points?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 类型 */
  readonly type?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 居民卡积分发放记录 分页查询返回 */
export type InhabitantPointsRewardDetailsList = {
  readonly __typename?: "InhabitantPointsRewardDetailsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<InhabitantPointsRewardDetails>>>;
};

export type InhabitantPointsRewardDetailsSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 发放记录ID */
  readonly communityRecordId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 居民卡id */
  readonly inhabitantId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 支出居民卡积分 */
  readonly points?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 类型 */
  readonly type?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 京东接口请求日志 */
export type JdongApiLogs = {
  readonly __typename?: "JdongApiLogs";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 请求头 */
  readonly headers?: Maybe<Scalars["JSONObject"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 访问IP */
  readonly ip?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 请求接口地址 */
  readonly path?: Maybe<Scalars["String"]>;
  /** 数据内容 */
  readonly queries?: Maybe<Scalars["JSONObject"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 应答数据 */
  readonly response?: Maybe<Scalars["JSONObject"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** uuid */
  readonly uuid?: Maybe<Scalars["String"]>;
};

/** 京东接口请求日志 分页查询返回 */
export type JdongApiLogsList = {
  readonly __typename?: "JdongApiLogsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<JdongApiLogs>>>;
};

export type JdongApiLogsSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 请求头 */
  readonly headers?: Maybe<Scalars["JSONObject"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 访问IP */
  readonly ip?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 请求接口地址 */
  readonly path?: Maybe<Scalars["String"]>;
  /** 数据内容 */
  readonly queries?: Maybe<Scalars["JSONObject"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 应答数据 */
  readonly response?: Maybe<Scalars["JSONObject"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** uuid */
  readonly uuid?: Maybe<Scalars["String"]>;
};

/** 京东用户绑定记录 */
export type JdongTrackingOrder = {
  readonly __typename?: "JdongTrackingOrder";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 京东订单编号 */
  readonly exchangeOrderNo?: Maybe<Scalars["String"]>;
  /** 兑换比率(绿豆:石分宝) */
  readonly exchangeRate?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 京东积分数(绿豆) */
  readonly jdongCoin?: Maybe<Scalars["Float"]>;
  /** 京东用户ID */
  readonly jdongUserId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 结果, (成功/失败, 1/0) */
  readonly status?: Maybe<Scalars["Float"]>;
  /** 唯一标识(幂等防重) */
  readonly uniqueFlag?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 石分达人积分数(石分宝) */
  readonly venderCoin?: Maybe<Scalars["Float"]>;
  /** 石分达人用户ID{appUser} */
  readonly venderUserId?: Maybe<Scalars["String"]>;
  /** 石分达人用户ID{appUser} */
  readonly venderUserIdObj?: Maybe<AppUser>;
};

/** 京东用户绑定记录 分页查询返回 */
export type JdongTrackingOrderList = {
  readonly __typename?: "JdongTrackingOrderList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<JdongTrackingOrder>>>;
};

export type JdongTrackingOrderSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 京东订单编号 */
  readonly exchangeOrderNo?: Maybe<Scalars["String"]>;
  /** 兑换比率(绿豆:石分宝) */
  readonly exchangeRate?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 京东积分数(绿豆) */
  readonly jdongCoin?: Maybe<Scalars["Float"]>;
  /** 京东用户ID */
  readonly jdongUserId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 结果, (成功/失败, 1/0) */
  readonly status?: Maybe<Scalars["Float"]>;
  /** 唯一标识(幂等防重) */
  readonly uniqueFlag?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 石分达人积分数(石分宝) */
  readonly venderCoin?: Maybe<Scalars["Float"]>;
  /** 石分达人用户ID{appUser} */
  readonly venderUserId?: Maybe<Scalars["String"]>;
};

/** 京东用户绑定记录 */
export type JdongUserBuilding = {
  readonly __typename?: "JdongUserBuilding";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 京东用户ID */
  readonly jdongUserId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 石分达人用户ID */
  readonly venderUserId?: Maybe<Scalars["String"]>;
  readonly venderUserIdObj?: Maybe<AppUser>;
};

/** 京东用户绑定记录 分页查询返回 */
export type JdongUserBuildingList = {
  readonly __typename?: "JdongUserBuildingList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<JdongUserBuilding>>>;
};

export type JdongUserBuildingSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 京东用户ID */
  readonly jdongUserId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 石分达人用户ID */
  readonly venderUserId?: Maybe<Scalars["String"]>;
};

/** 最后登录记录表 */
export type LoginLasttime = {
  readonly __typename?: "LoginLasttime";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 最后登录时间(YYYY-MM-DD HH:mi:ss) */
  readonly lastTime?: Maybe<Scalars["DateTime"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 最后登录记录表 分页查询返回 */
export type LoginLasttimeList = {
  readonly __typename?: "LoginLasttimeList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<LoginLasttime>>>;
};

export type LoginLasttimeSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 最后登录时间(YYYY-MM-DD HH:mi:ss) */
  readonly lastTime?: Maybe<Scalars["DateTime"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 登录记录表 */
export type LoginRecord = {
  readonly __typename?: "LoginRecord";
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 日期(YYYY-MM-DD), 后台专用 */
  readonly date?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 时间(HH:mm:ss), 后台专用 */
  readonly time?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 登录记录表 分页查询返回 */
export type LoginRecordList = {
  readonly __typename?: "LoginRecordList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<LoginRecord>>>;
};

export type LoginRecordSaveIn = {
  /** 用户ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 日期(YYYY-MM-DD), 后台专用 */
  readonly date?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 时间(HH:mm:ss), 后台专用 */
  readonly time?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 抽奖活动表 */
export type LotteryDrawActivity = {
  readonly __typename?: "LotteryDrawActivity";
  /** 活动状态, Y/N */
  readonly activityStatus?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly groupShoppingGoodsLotteryActivityId?: Maybe<
    ReadonlyArray<Maybe<GroupShoppingGoods>>
  >;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 活动标题 */
  readonly lotteryTitle?: Maybe<Scalars["String"]>;
  /** 抽奖类型(day, 日抽奖; upvoteCommunity, 点亮社区; cooperation, 异业合作; activityLottery, 活动抽奖) */
  readonly lotteryType?: Maybe<Scalars["String"]>;
  readonly luckyStarWishesActivityId?: Maybe<
    ReadonlyArray<Maybe<LuckyStarWishes>>
  >;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 父级id */
  readonly parentId?: Maybe<Scalars["String"]>;
  readonly parentIdObj?: Maybe<LotteryDrawActivity>;
  /** 参与人数 */
  readonly personNum?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 抽奖活动表 */
export type LotteryDrawActivityGroupShoppingGoodsLotteryActivityIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 抽奖活动表 */
export type LotteryDrawActivityLuckyStarWishesActivityIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 抽奖活动表 分页查询返回 */
export type LotteryDrawActivityList = {
  readonly __typename?: "LotteryDrawActivityList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<LotteryDrawActivity>>>;
};

export type LotteryDrawActivitySaveIn = {
  /** 活动状态, Y/N */
  readonly activityStatus?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly groupShoppingGoodsLotteryActivityId?: Maybe<
    ReadonlyArray<Maybe<GroupShoppingGoodsSaveIn>>
  >;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly lotteryDrawActivityParentId?: Maybe<
    ReadonlyArray<Maybe<LotteryDrawActivitySaveIn>>
  >;
  /** 活动标题 */
  readonly lotteryTitle?: Maybe<Scalars["String"]>;
  /** 抽奖类型(day, 日抽奖; upvoteCommunity, 点亮社区; cooperation, 异业合作; activityLottery, 活动抽奖) */
  readonly lotteryType?: Maybe<Scalars["String"]>;
  readonly luckyStarWishesActivityId?: Maybe<
    ReadonlyArray<Maybe<LuckyStarWishesSaveIn>>
  >;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 父级id */
  readonly parentId?: Maybe<Scalars["String"]>;
  /** 参与人数 */
  readonly personNum?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 用户抽奖记录表 */
export type LotteryDrawRecord = {
  readonly __typename?: "LotteryDrawRecord";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 商品规格 */
  readonly goodsSpec?: Maybe<Scalars["String"]>;
  /** 奖品名称 */
  readonly groupGoodsName?: Maybe<Scalars["String"]>;
  /** 商品包ID */
  readonly groupShoppingGoodsId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 抽奖所中奖品类型(physicalGoods, 实物奖品, recharge: 充值; stoneScore, 石分宝; experience, 达人值; thanks, 谢谢参与), 谢谢参与以外全部生成订单 */
  readonly lotteryGoods?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 订单Id */
  readonly trackingOrderId?: Maybe<Scalars["String"]>;
  readonly trackingOrderIdObj?: Maybe<TrackingOrder>;
  /** 抽奖类型(lottery, 转盘抽奖; qixiLottery, 七夕活动抽奖; jdLottery, 京东商品抽奖) */
  readonly type?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 用户抽奖记录表 分页查询返回 */
export type LotteryDrawRecordList = {
  readonly __typename?: "LotteryDrawRecordList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<LotteryDrawRecord>>>;
};

export type LotteryDrawRecordSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 商品规格 */
  readonly goodsSpec?: Maybe<Scalars["String"]>;
  /** 奖品名称 */
  readonly groupGoodsName?: Maybe<Scalars["String"]>;
  /** 商品包ID */
  readonly groupShoppingGoodsId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 抽奖所中奖品类型(physicalGoods, 实物奖品, recharge: 充值; stoneScore, 石分宝; experience, 达人值; thanks, 谢谢参与), 谢谢参与以外全部生成订单 */
  readonly lotteryGoods?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 订单Id */
  readonly trackingOrderId?: Maybe<Scalars["String"]>;
  /** 抽奖类型(lottery, 转盘抽奖; qixiLottery, 七夕活动抽奖; jdLottery, 京东商品抽奖) */
  readonly type?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 锦鲤活动报名记录 */
export type LuckyStarWishes = {
  readonly __typename?: "LuckyStarWishes";
  /** 活动ID */
  readonly activityId?: Maybe<Scalars["String"]>;
  readonly activityIdObj?: Maybe<LotteryDrawActivity>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 开奖状态(Y/N) */
  readonly lotteryStatus?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 锦鲤活动报名记录 分页查询返回 */
export type LuckyStarWishesList = {
  readonly __typename?: "LuckyStarWishesList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<LuckyStarWishes>>>;
};

export type LuckyStarWishesSaveIn = {
  /** 活动ID */
  readonly activityId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 开奖状态(Y/N) */
  readonly lotteryStatus?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 邮寄地址 */
export type MailAddress = {
  readonly __typename?: "MailAddress";
  /** 地址 */
  readonly address?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 区域 */
  readonly location?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  readonly residentialIdObj?: Maybe<AddressLibrary>;
  /** 性别(m, 男; w, 女) */
  readonly sex?: Maybe<Scalars["String"]>;
  /** 联系电话 */
  readonly telephone?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 使用状态, Y/N */
  readonly useStatus?: Maybe<Scalars["String"]>;
  /** 用户名 */
  readonly userName?: Maybe<Scalars["String"]>;
};

/** 邮寄地址 分页查询返回 */
export type MailAddressList = {
  readonly __typename?: "MailAddressList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<MailAddress>>>;
};

export type MailAddressSaveIn = {
  /** 地址 */
  readonly address?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 区域 */
  readonly location?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  /** 性别(m, 男; w, 女) */
  readonly sex?: Maybe<Scalars["String"]>;
  /** 联系电话 */
  readonly telephone?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 使用状态, Y/N */
  readonly useStatus?: Maybe<Scalars["String"]>;
  /** 用户名 */
  readonly userName?: Maybe<Scalars["String"]>;
};

/** 地图坐标点 */
export type MapPoint = {
  readonly __typename?: "MapPoint";
  /** 配置触发围栏所需动作触发动作分号分割 enter;leave（进入、离开触发） */
  readonly alertCondition?: Maybe<Scalars["String"]>;
  /** 业务id */
  readonly bizId?: Maybe<Scalars["String"]>;
  /** 业务类型 */
  readonly bizType?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 圆形围栏中心点longitude,latitude圆形围栏必填与points互斥 */
  readonly center?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 围栏id为预留字段，暂未使用，固定返回0。 */
  readonly dataId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 围栏描述信息 */
  readonly desc?: Maybe<Scalars["String"]>;
  /** 围栏监控状态 */
  readonly enable?: Maybe<Scalars["Boolean"]>;
  /** 启用标识 */
  readonly enableFlag?: Maybe<Scalars["String"]>;
  /** 错误码 */
  readonly errcode?: Maybe<Scalars["String"]>;
  /** 错误描述信息 */
  readonly errmsg?: Maybe<Scalars["String"]>;
  /** 指定日期列表格式"date1;date2;date3"； date格式"yyyy-MM-dd"；最大个数180，不能设定过去日期；repeat和fixed_date不能同时缺省或同时为空，二者所指出的监控日期为“或”关系；可选，repeat和fixed_date不能同时缺省或同时为空，二者所指出的监控日期为“或”关系 */
  readonly fixedDate?: Maybe<Scalars["String"]>;
  /** 围栏全局id是一个地理围栏实体的全局id（gid），是围栏的唯一标识，可以用来查找该围栏实体本身的详细信息 */
  readonly gid?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 类型 */
  readonly mapType?: Maybe<Scalars["String"]>;
  /** 状态说明信息 */
  readonly message?: Maybe<Scalars["String"]>;
  /** 围栏名称,字母&数字&汉字 */
  readonly name?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 多边形围栏坐标点lon1,lat1;lon2,lat2;lon3,lat3（3<=点个数<=5000）。多边形围栏外接圆半径最大为5000米。多边形围栏必填 */
  readonly points?: Maybe<Scalars["String"]>;
  /** 圆形围栏半径单位：米。范围0~5000。圆形围栏必填与points互斥  */
  readonly radius?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 一周内围栏监控日期的重复模式 星期缩写列表，用","或“;”隔开。 样例："Mon,Sat" 表示周一和周六有效。 星期简称如下（首字母大写）： Mon,Tues,Wed,Thur,Fri,Sat,Sun repeat和fixed_date不能同时缺省或同时为空，二者所指出的监控日期为“或”关系 可选，repeat和fixed_date不能同时缺省或同时为空，二者所指出的监控日期为“或”关系 */
  readonly repeat?: Maybe<Scalars["String"]>;
  /** 状态值 */
  readonly status?: Maybe<Scalars["String"]>;
  /** 一天内围栏监控时段开始时间和结束时间定义一时间段，可设置多个时间段，时间段按照时间顺序排列，各时间段不可重叠；  拼接字符串格式如："startTime1,endTime1;startTime2,endTime2"； 最大个数24； 不可为空； 范围00:00-23:59； 时间段不可重叠； 时间段长度>15min； 可选默认为00:00,23:59； */
  readonly time?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 过期日期围栏有效截止日期，过期后不对此围栏进行维护（围栏数据过期删除）； 不能设定创建围栏时间点之前的日期； 格式yyyy-MM-dd； 请设置2055年之前的日期可选 创建时间后90天； */
  readonly validTime?: Maybe<Scalars["DateTime"]>;
};

/** 地图坐标点 分页查询返回 */
export type MapPointList = {
  readonly __typename?: "MapPointList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<MapPoint>>>;
};

export type MapPointSaveIn = {
  /** 配置触发围栏所需动作触发动作分号分割 enter;leave（进入、离开触发） */
  readonly alertCondition?: Maybe<Scalars["String"]>;
  /** 业务id */
  readonly bizId?: Maybe<Scalars["String"]>;
  /** 业务类型 */
  readonly bizType?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 圆形围栏中心点longitude,latitude圆形围栏必填与points互斥 */
  readonly center?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 围栏id为预留字段，暂未使用，固定返回0。 */
  readonly dataId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 围栏描述信息 */
  readonly desc?: Maybe<Scalars["String"]>;
  /** 围栏监控状态 */
  readonly enable?: Maybe<Scalars["Boolean"]>;
  /** 启用标识 */
  readonly enableFlag?: Maybe<Scalars["String"]>;
  /** 错误码 */
  readonly errcode?: Maybe<Scalars["String"]>;
  /** 错误描述信息 */
  readonly errmsg?: Maybe<Scalars["String"]>;
  /** 指定日期列表格式"date1;date2;date3"； date格式"yyyy-MM-dd"；最大个数180，不能设定过去日期；repeat和fixed_date不能同时缺省或同时为空，二者所指出的监控日期为“或”关系；可选，repeat和fixed_date不能同时缺省或同时为空，二者所指出的监控日期为“或”关系 */
  readonly fixedDate?: Maybe<Scalars["String"]>;
  /** 围栏全局id是一个地理围栏实体的全局id（gid），是围栏的唯一标识，可以用来查找该围栏实体本身的详细信息 */
  readonly gid?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 类型 */
  readonly mapType?: Maybe<Scalars["String"]>;
  /** 状态说明信息 */
  readonly message?: Maybe<Scalars["String"]>;
  /** 围栏名称,字母&数字&汉字 */
  readonly name?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 多边形围栏坐标点lon1,lat1;lon2,lat2;lon3,lat3（3<=点个数<=5000）。多边形围栏外接圆半径最大为5000米。多边形围栏必填 */
  readonly points?: Maybe<Scalars["String"]>;
  /** 圆形围栏半径单位：米。范围0~5000。圆形围栏必填与points互斥  */
  readonly radius?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 一周内围栏监控日期的重复模式 星期缩写列表，用","或“;”隔开。 样例："Mon,Sat" 表示周一和周六有效。 星期简称如下（首字母大写）： Mon,Tues,Wed,Thur,Fri,Sat,Sun repeat和fixed_date不能同时缺省或同时为空，二者所指出的监控日期为“或”关系 可选，repeat和fixed_date不能同时缺省或同时为空，二者所指出的监控日期为“或”关系 */
  readonly repeat?: Maybe<Scalars["String"]>;
  /** 状态值 */
  readonly status?: Maybe<Scalars["String"]>;
  /** 一天内围栏监控时段开始时间和结束时间定义一时间段，可设置多个时间段，时间段按照时间顺序排列，各时间段不可重叠；  拼接字符串格式如："startTime1,endTime1;startTime2,endTime2"； 最大个数24； 不可为空； 范围00:00-23:59； 时间段不可重叠； 时间段长度>15min； 可选默认为00:00,23:59； */
  readonly time?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 过期日期围栏有效截止日期，过期后不对此围栏进行维护（围栏数据过期删除）； 不能设定创建围栏时间点之前的日期； 格式yyyy-MM-dd； 请设置2055年之前的日期可选 创建时间后90天； */
  readonly validTime?: Maybe<Scalars["DateTime"]>;
};

/** mq任务表 */
export type MessageQueueJobs = {
  readonly __typename?: "MessageQueueJobs";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 任务数据 */
  readonly jobData?: Maybe<Scalars["JSONObject"]>;
  /** 任务类型(shopping, 兑换; ) */
  readonly jobType?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** mq任务表 分页查询返回 */
export type MessageQueueJobsList = {
  readonly __typename?: "MessageQueueJobsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<MessageQueueJobs>>>;
};

export type MessageQueueJobsSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 任务数据 */
  readonly jobData?: Maybe<Scalars["JSONObject"]>;
  /** 任务类型(shopping, 兑换; ) */
  readonly jobType?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type Mutation = {
  readonly __typename?: "Mutation";
  /** 活动设置 新增 or 修改 */
  readonly activitySettings?: Maybe<Scalars["String"]>;
  /** 活动设置 批量 新增 or 修改 */
  readonly activitySettingsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 活动设置 删除 */
  readonly activitySettingsDestroy?: Maybe<Scalars["String"]>;
  /** 活动设置 根据id删除 */
  readonly activitySettingsDestroyById?: Maybe<Scalars["String"]>;
  /** 地址库 新增 or 修改 */
  readonly addressLibrary?: Maybe<Scalars["String"]>;
  /** 社区启用活动表 新增 or 修改 */
  readonly addressLibraryActivity?: Maybe<Scalars["String"]>;
  /** 社区启用活动表 批量 新增 or 修改 */
  readonly addressLibraryActivityBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 社区启用活动表 新增 */
  readonly addressLibraryActivityCreate?: Maybe<AddressLibraryActivity>;
  /** 社区启用活动表 删除 */
  readonly addressLibraryActivityDestroy?: Maybe<Scalars["String"]>;
  /** 社区启用活动表 根据id删除 */
  readonly addressLibraryActivityDestroyById?: Maybe<Scalars["String"]>;
  /** 地址库 批量 新增 or 修改 */
  readonly addressLibraryBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 地址库 删除 */
  readonly addressLibraryDestroy?: Maybe<Scalars["String"]>;
  /** 地址库 根据id删除 */
  readonly addressLibraryDestroyById?: Maybe<Scalars["String"]>;
  /** 终端用户 新增 or 修改 */
  readonly appUser?: Maybe<Scalars["String"]>;
  /** 用户活动记录表 新增 or 修改 */
  readonly appUserActivity?: Maybe<Scalars["String"]>;
  /** 用户活动记录表 批量 新增 or 修改 */
  readonly appUserActivityBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 用户活动记录表 删除 */
  readonly appUserActivityDestroy?: Maybe<Scalars["String"]>;
  /** 用户活动记录表 根据id删除 */
  readonly appUserActivityDestroyById?: Maybe<Scalars["String"]>;
  /** 用户明细表 新增 or 修改 */
  readonly appUserAddress?: Maybe<Scalars["String"]>;
  /** 用户明细表 批量 新增 or 修改 */
  readonly appUserAddressBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 用户明细表 删除 */
  readonly appUserAddressDestroy?: Maybe<Scalars["String"]>;
  /** 用户明细表 根据id删除 */
  readonly appUserAddressDestroyById?: Maybe<Scalars["String"]>;
  /** 终端用户 批量 新增 or 修改 */
  readonly appUserBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 终端用户 删除 */
  readonly appUserDestroy?: Maybe<Scalars["String"]>;
  /** 终端用户 根据id删除 */
  readonly appUserDestroyById?: Maybe<Scalars["String"]>;
  /** 用户基础信息表 新增 or 修改 */
  readonly appUserDetails?: Maybe<Scalars["String"]>;
  /** 用户基础信息表 批量 新增 or 修改 */
  readonly appUserDetailsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 用户基础信息表 删除 */
  readonly appUserDetailsDestroy?: Maybe<Scalars["String"]>;
  /** 用户基础信息表 根据id删除 */
  readonly appUserDetailsDestroyById?: Maybe<Scalars["String"]>;
  /** 邀请注册表 新增 or 修改 */
  readonly appUserInvite?: Maybe<Scalars["String"]>;
  /** 邀请注册表 批量 新增 or 修改 */
  readonly appUserInviteBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 邀请注册表 删除 */
  readonly appUserInviteDestroy?: Maybe<Scalars["String"]>;
  /** 邀请注册表 根据id删除 */
  readonly appUserInviteDestroyById?: Maybe<Scalars["String"]>;
  /** 小程序用户角色权限列表 新增 or 修改 */
  readonly appUserPower?: Maybe<Scalars["String"]>;
  /** 小程序用户角色权限列表 批量 新增 or 修改 */
  readonly appUserPowerBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 小程序用户角色权限列表 删除 */
  readonly appUserPowerDestroy?: Maybe<Scalars["String"]>;
  /** 小程序用户角色权限列表 根据id删除 */
  readonly appUserPowerDestroyById?: Maybe<Scalars["String"]>;
  /** 用户点亮值 新增 or 修改 */
  readonly appUserUpvote?: Maybe<Scalars["String"]>;
  /** 用户点亮值 批量 新增 or 修改 */
  readonly appUserUpvoteBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 用户点亮值 删除 */
  readonly appUserUpvoteDestroy?: Maybe<Scalars["String"]>;
  /** 用户点亮值 根据id删除 */
  readonly appUserUpvoteDestroyById?: Maybe<Scalars["String"]>;
  /** 排列5记录 新增 or 修改 */
  readonly arrangement?: Maybe<Scalars["String"]>;
  /** 排列5记录 批量 新增 or 修改 */
  readonly arrangementBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 排列5记录 删除 */
  readonly arrangementDestroy?: Maybe<Scalars["String"]>;
  /** 排列5记录 根据id删除 */
  readonly arrangementDestroyById?: Maybe<Scalars["String"]>;
  /** 文章记录表 新增 or 修改 */
  readonly article?: Maybe<Scalars["String"]>;
  /** 文章记录表 批量 新增 or 修改 */
  readonly articleBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 文章记录表 删除 */
  readonly articleDestroy?: Maybe<Scalars["String"]>;
  /** 文章记录表 根据id删除 */
  readonly articleDestroyById?: Maybe<Scalars["String"]>;
  /** 文章文件表 新增 or 修改 */
  readonly articleFile?: Maybe<Scalars["String"]>;
  /** 文章文件表 批量 新增 or 修改 */
  readonly articleFileBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 文章文件表 删除 */
  readonly articleFileDestroy?: Maybe<Scalars["String"]>;
  /** 文章文件表 根据id删除 */
  readonly articleFileDestroyById?: Maybe<Scalars["String"]>;
  /** 文章阅读记录表 新增 or 修改 */
  readonly articleReadRecord?: Maybe<Scalars["String"]>;
  /** 文章阅读记录表 批量 新增 or 修改 */
  readonly articleReadRecordBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 文章阅读记录表 删除 */
  readonly articleReadRecordDestroy?: Maybe<Scalars["String"]>;
  /** 文章阅读记录表 根据id删除 */
  readonly articleReadRecordDestroyById?: Maybe<Scalars["String"]>;
  /** 广告列表 新增 or 修改 */
  readonly bussinessActivity?: Maybe<Scalars["String"]>;
  /** 广告列表 批量 新增 or 修改 */
  readonly bussinessActivityBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 广告列表 删除 */
  readonly bussinessActivityDestroy?: Maybe<Scalars["String"]>;
  /** 广告列表 根据id删除 */
  readonly bussinessActivityDestroyById?: Maybe<Scalars["String"]>;
  /** 观看广告奖励记录 新增 or 修改 */
  readonly bussinessAdvertisingReward?: Maybe<Scalars["String"]>;
  /** 观看广告奖励记录 批量 新增 or 修改 */
  readonly bussinessAdvertisingRewardBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 观看广告奖励记录 删除 */
  readonly bussinessAdvertisingRewardDestroy?: Maybe<Scalars["String"]>;
  /** 观看广告奖励记录 根据id删除 */
  readonly bussinessAdvertisingRewardDestroyById?: Maybe<Scalars["String"]>;
  /** 卡号临时表 新增 or 修改 */
  readonly cardCodeTemp?: Maybe<Scalars["String"]>;
  /** 卡号临时表 批量 新增 or 修改 */
  readonly cardCodeTempBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 卡号临时表 新增 */
  readonly cardCodeTempCreate?: Maybe<CardCodeTemp>;
  /** 卡号临时表 删除 */
  readonly cardCodeTempDestroy?: Maybe<Scalars["String"]>;
  /** 卡号临时表 根据id删除 */
  readonly cardCodeTempDestroyById?: Maybe<Scalars["String"]>;
  /** 卡号创建 批量 */
  readonly cardCodeTempNanoId?: Maybe<Scalars["String"]>;
  /** 社区发言表 新增 or 修改 */
  readonly commentBoard?: Maybe<Scalars["String"]>;
  /** 社区发言表 批量 新增 or 修改 */
  readonly commentBoardBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 社区发言表 删除 */
  readonly commentBoardDestroy?: Maybe<Scalars["String"]>;
  /** 社区发言表 根据id删除 */
  readonly commentBoardDestroyById?: Maybe<Scalars["String"]>;
  /** 社区发言操作日志 新增 or 修改 */
  readonly commentBoardLog?: Maybe<Scalars["String"]>;
  /** 社区发言操作日志 批量 新增 or 修改 */
  readonly commentBoardLogBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 社区发言操作日志 删除 */
  readonly commentBoardLogDestroy?: Maybe<Scalars["String"]>;
  /** 社区发言操作日志 根据id删除 */
  readonly commentBoardLogDestroyById?: Maybe<Scalars["String"]>;
  /** 社区发言参与人数统计 新增 or 修改 */
  readonly commentBoardStat?: Maybe<Scalars["String"]>;
  /** 社区发言参与人数统计 批量 新增 or 修改 */
  readonly commentBoardStatBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 社区发言参与人数统计 删除 */
  readonly commentBoardStatDestroy?: Maybe<Scalars["String"]>;
  /** 社区发言参与人数统计 根据id删除 */
  readonly commentBoardStatDestroyById?: Maybe<Scalars["String"]>;
  /** 社区发言投票详情 新增 or 修改 */
  readonly commentBoardVote?: Maybe<Scalars["String"]>;
  /** 社区发言投票详情 批量 新增 or 修改 */
  readonly commentBoardVoteBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 社区发言投票详情 删除 */
  readonly commentBoardVoteDestroy?: Maybe<Scalars["String"]>;
  /** 社区发言投票详情 根据id删除 */
  readonly commentBoardVoteDestroyById?: Maybe<Scalars["String"]>;
  /** 社区发言投票奖励 新增 or 修改 */
  readonly commentBoardVoteScore?: Maybe<Scalars["String"]>;
  /** 社区发言投票奖励 批量 新增 or 修改 */
  readonly commentBoardVoteScoreBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 社区发言投票奖励 删除 */
  readonly commentBoardVoteScoreDestroy?: Maybe<Scalars["String"]>;
  /** 社区发言投票奖励 根据id删除 */
  readonly commentBoardVoteScoreDestroyById?: Maybe<Scalars["String"]>;
  /** 社区发言板块管理 新增 or 修改 */
  readonly commentClassify?: Maybe<Scalars["String"]>;
  /** 社区发言板块管理 批量 新增 or 修改 */
  readonly commentClassifyBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 社区发言板块管理 删除 */
  readonly commentClassifyDestroy?: Maybe<Scalars["String"]>;
  /** 社区发言板块管理 根据id删除 */
  readonly commentClassifyDestroyById?: Maybe<Scalars["String"]>;
  /** 社区发言图片表 新增 or 修改 */
  readonly commentImage?: Maybe<Scalars["String"]>;
  /** 社区发言图片表 批量 新增 or 修改 */
  readonly commentImageBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 社区发言图片表 删除 */
  readonly commentImageDestroy?: Maybe<Scalars["String"]>;
  /** 社区发言图片表 根据id删除 */
  readonly commentImageDestroyById?: Maybe<Scalars["String"]>;
  /** 社区发言板块奖励阶段 新增 or 修改 */
  readonly commentScoreLevel?: Maybe<Scalars["String"]>;
  /** 社区发言板块奖励阶段 批量 新增 or 修改 */
  readonly commentScoreLevelBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 社区发言板块奖励阶段 删除 */
  readonly commentScoreLevelDestroy?: Maybe<Scalars["String"]>;
  /** 社区发言板块奖励阶段 根据id删除 */
  readonly commentScoreLevelDestroyById?: Maybe<Scalars["String"]>;
  /** 社区点亮值 新增 or 修改 */
  readonly communityUpvote?: Maybe<Scalars["String"]>;
  /** 社区点亮值兑换记录 新增 or 修改 */
  readonly communityUpvoteActivity?: Maybe<Scalars["String"]>;
  /** 社区点亮值兑换记录 批量 新增 or 修改 */
  readonly communityUpvoteActivityBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 社区点亮值兑换记录 删除 */
  readonly communityUpvoteActivityDestroy?: Maybe<Scalars["String"]>;
  /** 社区点亮值兑换记录 根据id删除 */
  readonly communityUpvoteActivityDestroyById?: Maybe<Scalars["String"]>;
  /** 社区点亮值 批量 新增 or 修改 */
  readonly communityUpvoteBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 社区点亮值 删除 */
  readonly communityUpvoteDestroy?: Maybe<Scalars["String"]>;
  /** 社区点亮值 根据id删除 */
  readonly communityUpvoteDestroyById?: Maybe<Scalars["String"]>;
  /** 店铺列表 新增 or 修改 */
  readonly cooperationMerchant?: Maybe<Scalars["String"]>;
  /** 店铺列表 批量 新增 or 修改 */
  readonly cooperationMerchantBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 门店券 新增 or 修改 */
  readonly cooperationMerchantCoupon?: Maybe<Scalars["String"]>;
  /** 门店券 批量 新增 or 修改 */
  readonly cooperationMerchantCouponBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 门店券 删除 */
  readonly cooperationMerchantCouponDestroy?: Maybe<Scalars["String"]>;
  /** 门店券 根据id删除 */
  readonly cooperationMerchantCouponDestroyById?: Maybe<Scalars["String"]>;
  /** 店铺列表 删除 */
  readonly cooperationMerchantDestroy?: Maybe<Scalars["String"]>;
  /** 店铺列表 根据id删除 */
  readonly cooperationMerchantDestroyById?: Maybe<Scalars["String"]>;
  /** 门店券-优惠套餐-发放 新增 or 修改 */
  readonly couponGrantComboSale?: Maybe<Scalars["String"]>;
  /** 门店券-优惠套餐-发放 批量 新增 or 修改 */
  readonly couponGrantComboSaleBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 门店券-优惠套餐-发放 删除 */
  readonly couponGrantComboSaleDestroy?: Maybe<Scalars["String"]>;
  /** 门店券-优惠套餐-发放 根据id删除 */
  readonly couponGrantComboSaleDestroyById?: Maybe<Scalars["String"]>;
  /** 门店券-通兑券-发放 新增 or 修改 */
  readonly couponGrantExchange?: Maybe<Scalars["String"]>;
  /** 门店券-通兑券-发放 批量 新增 or 修改 */
  readonly couponGrantExchangeBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 门店券-通兑券-发放 删除 */
  readonly couponGrantExchangeDestroy?: Maybe<Scalars["String"]>;
  /** 门店券-通兑券-发放 根据id删除 */
  readonly couponGrantExchangeDestroyById?: Maybe<Scalars["String"]>;
  /** 门店券-满减券-发放 新增 or 修改 */
  readonly couponGrantSpecialOffers?: Maybe<Scalars["String"]>;
  /** 门店券-满减券-发放 批量 新增 or 修改 */
  readonly couponGrantSpecialOffersBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 门店券-满减券-发放 删除 */
  readonly couponGrantSpecialOffersDestroy?: Maybe<Scalars["String"]>;
  /** 门店券-满减券-发放 根据id删除 */
  readonly couponGrantSpecialOffersDestroyById?: Maybe<Scalars["String"]>;
  /** 门店券订单列表 新增 or 修改 */
  readonly couponOrder?: Maybe<Scalars["String"]>;
  /** 门店券订单列表 批量 新增 or 修改 */
  readonly couponOrderBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 门店券订单列表 删除 */
  readonly couponOrderDestroy?: Maybe<Scalars["String"]>;
  /** 门店券订单列表 根据id删除 */
  readonly couponOrderDestroyById?: Maybe<Scalars["String"]>;
  /** 门店券订单日志 新增 or 修改 */
  readonly couponOrderLog?: Maybe<Scalars["String"]>;
  /** 门店券订单日志 批量 新增 or 修改 */
  readonly couponOrderLogBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 门店券订单日志 删除 */
  readonly couponOrderLogDestroy?: Maybe<Scalars["String"]>;
  /** 门店券订单日志 根据id删除 */
  readonly couponOrderLogDestroyById?: Maybe<Scalars["String"]>;
  /** 门店券-优惠套餐 新增 or 修改 */
  readonly couponQrcodeComboSale?: Maybe<Scalars["String"]>;
  /** 门店券-优惠套餐 批量 新增 or 修改 */
  readonly couponQrcodeComboSaleBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 门店券-优惠套餐 删除 */
  readonly couponQrcodeComboSaleDestroy?: Maybe<Scalars["String"]>;
  /** 门店券-优惠套餐 根据id删除 */
  readonly couponQrcodeComboSaleDestroyById?: Maybe<Scalars["String"]>;
  /** 门店券-通兑券 新增 or 修改 */
  readonly couponQrcodeExchange?: Maybe<Scalars["String"]>;
  /** 门店券-通兑券 批量 新增 or 修改 */
  readonly couponQrcodeExchangeBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 门店券-通兑券 删除 */
  readonly couponQrcodeExchangeDestroy?: Maybe<Scalars["String"]>;
  /** 门店券-通兑券 根据id删除 */
  readonly couponQrcodeExchangeDestroyById?: Maybe<Scalars["String"]>;
  /** 门店券-满减券 新增 or 修改 */
  readonly couponQrcodeSpecialOffers?: Maybe<Scalars["String"]>;
  /** 门店券-满减券 批量 新增 or 修改 */
  readonly couponQrcodeSpecialOffersBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 门店券-满减券 删除 */
  readonly couponQrcodeSpecialOffersDestroy?: Maybe<Scalars["String"]>;
  /** 门店券-满减券 根据id删除 */
  readonly couponQrcodeSpecialOffersDestroyById?: Maybe<Scalars["String"]>;
  /** 货币兑换比率 新增 or 修改 */
  readonly currencyExchangeRate?: Maybe<Scalars["String"]>;
  /** 货币兑换比率 批量 新增 or 修改 */
  readonly currencyExchangeRateBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 货币兑换比率 删除 */
  readonly currencyExchangeRateDestroy?: Maybe<Scalars["String"]>;
  /** 货币兑换比率 根据id删除 */
  readonly currencyExchangeRateDestroyById?: Maybe<Scalars["String"]>;
  /** 系统设置字典库 新增 or 修改 */
  readonly dataDictionarySystem?: Maybe<Scalars["String"]>;
  /** 系统设置字典库 批量 新增 or 修改 */
  readonly dataDictionarySystemBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 系统设置字典库 删除 */
  readonly dataDictionarySystemDestroy?: Maybe<Scalars["String"]>;
  /** 系统设置字典库 根据id删除 */
  readonly dataDictionarySystemDestroyById?: Maybe<Scalars["String"]>;
  /** 南水工程demo 新增 or 修改 */
  readonly demoWater?: Maybe<Scalars["String"]>;
  /** 南水工程demo 批量 新增 or 修改 */
  readonly demoWaterBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 南水工程demo 删除 */
  readonly demoWaterDestroy?: Maybe<Scalars["String"]>;
  /** 南水工程demo 根据id删除 */
  readonly demoWaterDestroyById?: Maybe<Scalars["String"]>;
  /** 公众号关注用户号 新增 or 修改 */
  readonly emsCnplAttention?: Maybe<Scalars["String"]>;
  /** 公众号关注用户号 批量 新增 or 修改 */
  readonly emsCnplAttentionBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 公众号关注用户号 删除 */
  readonly emsCnplAttentionDestroy?: Maybe<Scalars["String"]>;
  /** 公众号关注用户号 根据id删除 */
  readonly emsCnplAttentionDestroyById?: Maybe<Scalars["String"]>;
  /** 文件上传记录表 新增 or 修改 */
  readonly file?: Maybe<Scalars["String"]>;
  /** 文件上传记录表 批量 新增 or 修改 */
  readonly fileBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 文件上传记录表 删除 */
  readonly fileDestroy?: Maybe<Scalars["String"]>;
  /** 文件上传记录表 根据id删除 */
  readonly fileDestroyById?: Maybe<Scalars["String"]>;
  /** 备注 新增 or 修改 */
  readonly frontEndCache?: Maybe<Scalars["String"]>;
  /** 备注 批量 新增 or 修改 */
  readonly frontEndCacheBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 备注 删除 */
  readonly frontEndCacheDestroy?: Maybe<Scalars["String"]>;
  /** 备注 根据id删除 */
  readonly frontEndCacheDestroyById?: Maybe<Scalars["String"]>;
  /** 绿景积分记录表 新增 or 修改 */
  readonly greenViewPoints?: Maybe<Scalars["String"]>;
  /** 绿景积分记录表 批量 新增 or 修改 */
  readonly greenViewPointsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 绿景积分记录表 删除 */
  readonly greenViewPointsDestroy?: Maybe<Scalars["String"]>;
  /** 绿景积分记录表 根据id删除 */
  readonly greenViewPointsDestroyById?: Maybe<Scalars["String"]>;
  /** 商品包 新增 or 修改 */
  readonly groupShoppingGoods?: Maybe<Scalars["String"]>;
  /** 商品包 批量 新增 or 修改 */
  readonly groupShoppingGoodsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 商品包 删除 */
  readonly groupShoppingGoodsDestroy?: Maybe<Scalars["String"]>;
  /** 商品包 根据id删除 */
  readonly groupShoppingGoodsDestroyById?: Maybe<Scalars["String"]>;
  /** 商品包采购入库单 新增 or 修改 */
  readonly groupShoppingGoodsOrder?: Maybe<Scalars["String"]>;
  /** 商品包采购入库单 批量 新增 or 修改 */
  readonly groupShoppingGoodsOrderBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 商品包采购入库单 删除 */
  readonly groupShoppingGoodsOrderDestroy?: Maybe<Scalars["String"]>;
  /** 商品包采购入库单 根据id删除 */
  readonly groupShoppingGoodsOrderDestroyById?: Maybe<Scalars["String"]>;
  /** 首页入口配置详情 新增 or 修改 */
  readonly homePageDetails?: Maybe<Scalars["String"]>;
  /** 首页入口配置详情 批量 新增 or 修改 */
  readonly homePageDetailsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 首页入口配置详情 删除 */
  readonly homePageDetailsDestroy?: Maybe<Scalars["String"]>;
  /** 首页入口配置详情 根据id删除 */
  readonly homePageDetailsDestroyById?: Maybe<Scalars["String"]>;
  /** 首页入口配置 新增 or 修改 */
  readonly homePageSystem?: Maybe<Scalars["String"]>;
  /** 首页入口配置 批量 新增 or 修改 */
  readonly homePageSystemBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 首页入口配置 删除 */
  readonly homePageSystemDestroy?: Maybe<Scalars["String"]>;
  /** 首页入口配置 根据id删除 */
  readonly homePageSystemDestroyById?: Maybe<Scalars["String"]>;
  /** 首页入口配置图片 新增 or 修改 */
  readonly homePageSystemImage?: Maybe<Scalars["String"]>;
  /** 首页入口配置图片 批量 新增 or 修改 */
  readonly homePageSystemImageBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 首页入口配置图片 删除 */
  readonly homePageSystemImageDestroy?: Maybe<Scalars["String"]>;
  /** 首页入口配置图片 根据id删除 */
  readonly homePageSystemImageDestroyById?: Maybe<Scalars["String"]>;
  /** 任务奖励设置表 新增 or 修改 */
  readonly incentiveValue?: Maybe<Scalars["String"]>;
  /** 任务奖励设置表 批量 新增 or 修改 */
  readonly incentiveValueBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 任务奖励设置表 删除 */
  readonly incentiveValueDestroy?: Maybe<Scalars["String"]>;
  /** 任务奖励设置表 根据id删除 */
  readonly incentiveValueDestroyById?: Maybe<Scalars["String"]>;
  /** 居民卡积分关联表 新增 or 修改 */
  readonly inhabitantPointsRelation?: Maybe<Scalars["String"]>;
  /** 居民卡积分关联表 批量 新增 or 修改 */
  readonly inhabitantPointsRelationBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 居民卡积分关联表 删除 */
  readonly inhabitantPointsRelationDestroy?: Maybe<Scalars["String"]>;
  /** 居民卡积分关联表 根据id删除 */
  readonly inhabitantPointsRelationDestroyById?: Maybe<Scalars["String"]>;
  /** 居民卡积分发放记录 新增 or 修改 */
  readonly inhabitantPointsRewardDetails?: Maybe<Scalars["String"]>;
  /** 居民卡积分发放记录 批量 新增 or 修改 */
  readonly inhabitantPointsRewardDetailsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 居民卡积分发放记录 删除 */
  readonly inhabitantPointsRewardDetailsDestroy?: Maybe<Scalars["String"]>;
  /** 居民卡积分发放记录 根据id删除 */
  readonly inhabitantPointsRewardDetailsDestroyById?: Maybe<Scalars["String"]>;
  /** 京东接口请求日志 新增 or 修改 */
  readonly jdongApiLogs?: Maybe<Scalars["String"]>;
  /** 京东接口请求日志 批量 新增 or 修改 */
  readonly jdongApiLogsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 京东接口请求日志 删除 */
  readonly jdongApiLogsDestroy?: Maybe<Scalars["String"]>;
  /** 京东接口请求日志 根据id删除 */
  readonly jdongApiLogsDestroyById?: Maybe<Scalars["String"]>;
  /** 京东用户绑定记录 新增 or 修改 */
  readonly jdongTrackingOrder?: Maybe<Scalars["String"]>;
  /** 京东用户绑定记录 批量 新增 or 修改 */
  readonly jdongTrackingOrderBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 京东用户绑定记录 删除 */
  readonly jdongTrackingOrderDestroy?: Maybe<Scalars["String"]>;
  /** 京东用户绑定记录 根据id删除 */
  readonly jdongTrackingOrderDestroyById?: Maybe<Scalars["String"]>;
  /** 京东用户绑定记录 新增 or 修改 */
  readonly jdongUserBuilding?: Maybe<Scalars["String"]>;
  /** 京东用户绑定记录 批量 新增 or 修改 */
  readonly jdongUserBuildingBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 京东用户绑定记录 删除 */
  readonly jdongUserBuildingDestroy?: Maybe<Scalars["String"]>;
  /** 京东用户绑定记录 根据id删除 */
  readonly jdongUserBuildingDestroyById?: Maybe<Scalars["String"]>;
  /** 最后登录记录表 新增 or 修改 */
  readonly loginLasttime?: Maybe<Scalars["String"]>;
  /** 最后登录记录表 批量 新增 or 修改 */
  readonly loginLasttimeBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 最后登录记录表 删除 */
  readonly loginLasttimeDestroy?: Maybe<Scalars["String"]>;
  /** 最后登录记录表 根据id删除 */
  readonly loginLasttimeDestroyById?: Maybe<Scalars["String"]>;
  /** 登录记录表 新增 or 修改 */
  readonly loginRecord?: Maybe<Scalars["String"]>;
  /** 登录记录表 批量 新增 or 修改 */
  readonly loginRecordBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 登录记录表 删除 */
  readonly loginRecordDestroy?: Maybe<Scalars["String"]>;
  /** 登录记录表 根据id删除 */
  readonly loginRecordDestroyById?: Maybe<Scalars["String"]>;
  /** 抽奖活动表 新增 or 修改 */
  readonly lotteryDrawActivity?: Maybe<Scalars["String"]>;
  /** 抽奖活动表 批量 新增 or 修改 */
  readonly lotteryDrawActivityBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 抽奖活动表 删除 */
  readonly lotteryDrawActivityDestroy?: Maybe<Scalars["String"]>;
  /** 抽奖活动表 根据id删除 */
  readonly lotteryDrawActivityDestroyById?: Maybe<Scalars["String"]>;
  /** 用户抽奖记录表 新增 or 修改 */
  readonly lotteryDrawRecord?: Maybe<Scalars["String"]>;
  /** 用户抽奖记录表 批量 新增 or 修改 */
  readonly lotteryDrawRecordBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 用户抽奖记录表 删除 */
  readonly lotteryDrawRecordDestroy?: Maybe<Scalars["String"]>;
  /** 用户抽奖记录表 根据id删除 */
  readonly lotteryDrawRecordDestroyById?: Maybe<Scalars["String"]>;
  /** 锦鲤活动报名记录 新增 or 修改 */
  readonly luckyStarWishes?: Maybe<Scalars["String"]>;
  /** 锦鲤活动报名记录 批量 新增 or 修改 */
  readonly luckyStarWishesBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 锦鲤活动报名记录 删除 */
  readonly luckyStarWishesDestroy?: Maybe<Scalars["String"]>;
  /** 锦鲤活动报名记录 根据id删除 */
  readonly luckyStarWishesDestroyById?: Maybe<Scalars["String"]>;
  /** 邮寄地址 新增 or 修改 */
  readonly mailAddress?: Maybe<Scalars["String"]>;
  /** 邮寄地址 批量 新增 or 修改 */
  readonly mailAddressBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 邮寄地址 删除 */
  readonly mailAddressDestroy?: Maybe<Scalars["String"]>;
  /** 邮寄地址 根据id删除 */
  readonly mailAddressDestroyById?: Maybe<Scalars["String"]>;
  /** 地图坐标点 新增 or 修改 */
  readonly mapPoint?: Maybe<Scalars["String"]>;
  /** 地图坐标点 批量 新增 or 修改 */
  readonly mapPointBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 地图坐标点 新增 */
  readonly mapPointCreate?: Maybe<MapPoint>;
  /** 地图坐标点 删除 */
  readonly mapPointDestroy?: Maybe<Scalars["String"]>;
  /** 地图坐标点 根据id删除 */
  readonly mapPointDestroyById?: Maybe<Scalars["String"]>;
  /** mq任务表 新增 or 修改 */
  readonly messageQueueJobs?: Maybe<Scalars["String"]>;
  /** mq任务表 批量 新增 or 修改 */
  readonly messageQueueJobsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** mq任务表 删除 */
  readonly messageQueueJobsDestroy?: Maybe<Scalars["String"]>;
  /** mq任务表 根据id删除 */
  readonly messageQueueJobsDestroyById?: Maybe<Scalars["String"]>;
  /** 小程序角色权限表 新增 or 修改 */
  readonly power?: Maybe<Scalars["String"]>;
  /** 小程序角色权限表 批量 新增 or 修改 */
  readonly powerBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 小程序角色权限表 删除 */
  readonly powerDestroy?: Maybe<Scalars["String"]>;
  /** 小程序角色权限表 根据id删除 */
  readonly powerDestroyById?: Maybe<Scalars["String"]>;
  /** 用户答题记录 新增 or 修改 */
  readonly questionAnswerRecord?: Maybe<Scalars["String"]>;
  /** 用户答题记录 批量 新增 or 修改 */
  readonly questionAnswerRecordBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 用户答题记录 删除 */
  readonly questionAnswerRecordDestroy?: Maybe<Scalars["String"]>;
  /** 用户答题记录 根据id删除 */
  readonly questionAnswerRecordDestroyById?: Maybe<Scalars["String"]>;
  /** 活动题库 新增 or 修改 */
  readonly questionBank?: Maybe<Scalars["String"]>;
  /** 活动题库 批量 新增 or 修改 */
  readonly questionBankBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 活动题库 删除 */
  readonly questionBankDestroy?: Maybe<Scalars["String"]>;
  /** 活动题库 根据id删除 */
  readonly questionBankDestroyById?: Maybe<Scalars["String"]>;
  /** 调查问卷列表 新增 or 修改 */
  readonly questionnaire?: Maybe<Scalars["String"]>;
  /** 调查问卷列表 批量 新增 or 修改 */
  readonly questionnaireBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 调查问卷列表 删除 */
  readonly questionnaireDestroy?: Maybe<Scalars["String"]>;
  /** 调查问卷列表 根据id删除 */
  readonly questionnaireDestroyById?: Maybe<Scalars["String"]>;
  /** 调查问卷列表 新增 or 修改 */
  readonly questionnaireLocation?: Maybe<Scalars["String"]>;
  /** 调查问卷列表 批量 新增 or 修改 */
  readonly questionnaireLocationBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 调查问卷列表 删除 */
  readonly questionnaireLocationDestroy?: Maybe<Scalars["String"]>;
  /** 调查问卷列表 根据id删除 */
  readonly questionnaireLocationDestroyById?: Maybe<Scalars["String"]>;
  /** 调查问卷选项表 新增 or 修改 */
  readonly questionnaireOptions?: Maybe<Scalars["String"]>;
  /** 调查问卷选项表 批量 新增 or 修改 */
  readonly questionnaireOptionsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 调查问卷选项表 新增 */
  readonly questionnaireOptionsCreate?: Maybe<QuestionnaireOptions>;
  /** 调查问卷选项表 删除 */
  readonly questionnaireOptionsDestroy?: Maybe<Scalars["String"]>;
  /** 调查问卷选项表 根据id删除 */
  readonly questionnaireOptionsDestroyById?: Maybe<Scalars["String"]>;
  /** 调查问卷问题表 新增 or 修改 */
  readonly questionnaireQuestion?: Maybe<Scalars["String"]>;
  /** 调查问卷问题表 批量 新增 or 修改 */
  readonly questionnaireQuestionBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 调查问卷问题表 新增 */
  readonly questionnaireQuestionCreate?: Maybe<QuestionnaireQuestion>;
  /** 调查问卷问题表 删除 */
  readonly questionnaireQuestionDestroy?: Maybe<Scalars["String"]>;
  /** 调查问卷问题表 根据id删除 */
  readonly questionnaireQuestionDestroyById?: Maybe<Scalars["String"]>;
  /** 调查问卷用户应答记录 新增 or 修改 */
  readonly questionnaireUserAnswer?: Maybe<Scalars["String"]>;
  /** 调查问卷用户应答记录 批量 新增 or 修改 */
  readonly questionnaireUserAnswerBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 调查问卷用户应答记录 新增 */
  readonly questionnaireUserAnswerCreate?: Maybe<QuestionnaireUserAnswer>;
  /** 调查问卷用户应答记录 删除 */
  readonly questionnaireUserAnswerDestroy?: Maybe<Scalars["String"]>;
  /** 调查问卷用户应答记录 根据id删除 */
  readonly questionnaireUserAnswerDestroyById?: Maybe<Scalars["String"]>;
  /** 调查问卷记录 新增 or 修改 */
  readonly questionnaireUserRecord?: Maybe<Scalars["String"]>;
  /** 调查问卷记录 批量 新增 or 修改 */
  readonly questionnaireUserRecordBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 调查问卷记录 删除 */
  readonly questionnaireUserRecordDestroy?: Maybe<Scalars["String"]>;
  /** 调查问卷记录 根据id删除 */
  readonly questionnaireUserRecordDestroyById?: Maybe<Scalars["String"]>;
  /** 报表存储 新增 or 修改 */
  readonly report?: Maybe<Scalars["String"]>;
  /** 报表存储 批量 新增 or 修改 */
  readonly reportBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 报表存储 删除 */
  readonly reportDestroy?: Maybe<Scalars["String"]>;
  /** 报表存储 根据id删除 */
  readonly reportDestroyById?: Maybe<Scalars["String"]>;
  /** 石分社区-居民卡日志 新增 or 修改 */
  readonly shifenCommunityCardLogs?: Maybe<Scalars["String"]>;
  /** 石分社区-居民卡日志 批量 新增 or 修改 */
  readonly shifenCommunityCardLogsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分社区-居民卡日志 删除 */
  readonly shifenCommunityCardLogsDestroy?: Maybe<Scalars["String"]>;
  /** 石分社区-居民卡日志 根据id删除 */
  readonly shifenCommunityCardLogsDestroyById?: Maybe<Scalars["String"]>;
  /** 石分社区-居民卡 新增 or 修改 */
  readonly shifenCommunityInhabitantCard?: Maybe<Scalars["String"]>;
  /** 石分社区-居民卡 批量 新增 or 修改 */
  readonly shifenCommunityInhabitantCardBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分社区-居民卡 新增 */
  readonly shifenCommunityInhabitantCardCreate?: Maybe<ShifenCommunityInhabitantCard>;
  /** 石分社区-居民卡 删除 */
  readonly shifenCommunityInhabitantCardDestroy?: Maybe<Scalars["String"]>;
  /** 石分社区-居民卡 根据id删除 */
  readonly shifenCommunityInhabitantCardDestroyById?: Maybe<Scalars["String"]>;
  /** 石分社区-居民卡积分变更记录 新增 or 修改 */
  readonly shifenCommunityInhabitantPoints?: Maybe<Scalars["String"]>;
  /** 石分社区-居民卡积分变更记录 批量 新增 or 修改 */
  readonly shifenCommunityInhabitantPointsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分社区-居民卡积分变更记录 删除 */
  readonly shifenCommunityInhabitantPointsDestroy?: Maybe<Scalars["String"]>;
  /** 石分社区-居民卡积分变更记录 根据id删除 */
  readonly shifenCommunityInhabitantPointsDestroyById?: Maybe<
    Scalars["String"]
  >;
  /** 石分社区-用户积分转移记录中间表 新增 or 修改 */
  readonly shifenCommunityInhabitantTransfer?: Maybe<Scalars["String"]>;
  /** 石分社区-用户积分转移记录中间表 批量 新增 or 修改 */
  readonly shifenCommunityInhabitantTransferBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分社区-用户积分转移记录中间表 删除 */
  readonly shifenCommunityInhabitantTransferDestroy?: Maybe<Scalars["String"]>;
  /** 石分社区-用户积分转移记录中间表 根据id删除 */
  readonly shifenCommunityInhabitantTransferDestroyById?: Maybe<
    Scalars["String"]
  >;
  /** 石分社区-积分变更记录 新增 or 修改 */
  readonly shifenCommunityPoints?: Maybe<Scalars["String"]>;
  /** 石分社区-积分变更记录 批量 新增 or 修改 */
  readonly shifenCommunityPointsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分社区-积分变更记录 删除 */
  readonly shifenCommunityPointsDestroy?: Maybe<Scalars["String"]>;
  /** 石分社区-积分变更记录 根据id删除 */
  readonly shifenCommunityPointsDestroyById?: Maybe<Scalars["String"]>;
  /** 石分社区-用户积分变更记录 新增 or 修改 */
  readonly shifenCommunityPointsImage?: Maybe<Scalars["String"]>;
  /** 石分社区-用户积分变更记录 批量 新增 or 修改 */
  readonly shifenCommunityPointsImageBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分社区-用户积分变更记录 删除 */
  readonly shifenCommunityPointsImageDestroy?: Maybe<Scalars["String"]>;
  /** 石分社区-用户积分变更记录 根据id删除 */
  readonly shifenCommunityPointsImageDestroyById?: Maybe<Scalars["String"]>;
  /** 商城商品 新增 or 修改 */
  readonly shoppingGoods?: Maybe<Scalars["String"]>;
  /** 商城商品 批量 新增 or 修改 */
  readonly shoppingGoodsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 商城商品 删除 */
  readonly shoppingGoodsDestroy?: Maybe<Scalars["String"]>;
  /** 商城商品 根据id删除 */
  readonly shoppingGoodsDestroyById?: Maybe<Scalars["String"]>;
  /** 商城-商品-图片 新增 or 修改 */
  readonly shoppingGoodsImage?: Maybe<Scalars["String"]>;
  /** 商城-商品-图片 批量 新增 or 修改 */
  readonly shoppingGoodsImageBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 商城-商品-图片 删除 */
  readonly shoppingGoodsImageDestroy?: Maybe<Scalars["String"]>;
  /** 商城-商品-图片 根据id删除 */
  readonly shoppingGoodsImageDestroyById?: Maybe<Scalars["String"]>;
  /** 商城商品库存变化记录表 新增 or 修改 */
  readonly shoppingGoodsStock?: Maybe<Scalars["String"]>;
  /** 商城商品库存变化记录表 批量 新增 or 修改 */
  readonly shoppingGoodsStockBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 商城商品库存变化记录表 删除 */
  readonly shoppingGoodsStockDestroy?: Maybe<Scalars["String"]>;
  /** 商城商品库存变化记录表 根据id删除 */
  readonly shoppingGoodsStockDestroyById?: Maybe<Scalars["String"]>;
  /** 货柜自动订单积分扣减 新增 or 修改 */
  readonly shouhuojiyunPoints?: Maybe<Scalars["String"]>;
  /** 货柜自动订单积分扣减 批量 新增 or 修改 */
  readonly shouhuojiyunPointsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 货柜自动订单积分扣减 删除 */
  readonly shouhuojiyunPointsDestroy?: Maybe<Scalars["String"]>;
  /** 货柜自动订单积分扣减 根据id删除 */
  readonly shouhuojiyunPointsDestroyById?: Maybe<Scalars["String"]>;
  /** 签到标签管理(分类知识) 新增 or 修改 */
  readonly signInLabel?: Maybe<Scalars["String"]>;
  /** 签到标签管理(分类知识) 批量 新增 or 修改 */
  readonly signInLabelBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 签到标签管理(分类知识) 删除 */
  readonly signInLabelDestroy?: Maybe<Scalars["String"]>;
  /** 签到标签管理(分类知识) 根据id删除 */
  readonly signInLabelDestroyById?: Maybe<Scalars["String"]>;
  /** 签到记录表 新增 or 修改 */
  readonly signInRecord?: Maybe<Scalars["String"]>;
  /** 签到记录表 批量 新增 or 修改 */
  readonly signInRecordBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 签到记录表 删除 */
  readonly signInRecordDestroy?: Maybe<Scalars["String"]>;
  /** 签到记录表 根据id删除 */
  readonly signInRecordDestroyById?: Maybe<Scalars["String"]>;
  /** 签到分享记录 新增 or 修改 */
  readonly signInShared?: Maybe<Scalars["String"]>;
  /** 签到分享记录 批量 新增 or 修改 */
  readonly signInSharedBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 签到分享记录 删除 */
  readonly signInSharedDestroy?: Maybe<Scalars["String"]>;
  /** 签到分享记录 根据id删除 */
  readonly signInSharedDestroyById?: Maybe<Scalars["String"]>;
  /** 短信 新增 or 修改 */
  readonly sms?: Maybe<Scalars["String"]>;
  /** 短信 批量 新增 or 修改 */
  readonly smsBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 短信 删除 */
  readonly smsDestroy?: Maybe<Scalars["String"]>;
  /** 短信 根据id删除 */
  readonly smsDestroyById?: Maybe<Scalars["String"]>;
  /** 石分夺宝自动开奖记录 新增 or 修改 */
  readonly snatchLotteryRunLog?: Maybe<Scalars["String"]>;
  /** 石分夺宝自动开奖记录 批量 新增 or 修改 */
  readonly snatchLotteryRunLogBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分夺宝自动开奖记录 删除 */
  readonly snatchLotteryRunLogDestroy?: Maybe<Scalars["String"]>;
  /** 石分夺宝自动开奖记录 根据id删除 */
  readonly snatchLotteryRunLogDestroyById?: Maybe<Scalars["String"]>;
  /** 石分夺宝数据 新增 or 修改 */
  readonly snatchTreasure?: Maybe<Scalars["String"]>;
  /** 石分夺宝数据 批量 新增 or 修改 */
  readonly snatchTreasureBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分夺宝数据 删除 */
  readonly snatchTreasureDestroy?: Maybe<Scalars["String"]>;
  /** 石分夺宝数据 根据id删除 */
  readonly snatchTreasureDestroyById?: Maybe<Scalars["String"]>;
  /** 石分夺宝奖券数据 新增 or 修改 */
  readonly snatchTreasureRecord?: Maybe<Scalars["String"]>;
  /** 石分夺宝奖券数据 批量 新增 or 修改 */
  readonly snatchTreasureRecordBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分夺宝奖券数据 删除 */
  readonly snatchTreasureRecordDestroy?: Maybe<Scalars["String"]>;
  /** 石分夺宝奖券数据 根据id删除 */
  readonly snatchTreasureRecordDestroyById?: Maybe<Scalars["String"]>;
  /** 石分夺宝奖券数据 新增 or 修改 */
  readonly snatchTreasureShared?: Maybe<Scalars["String"]>;
  /** 石分夺宝奖券数据 批量 新增 or 修改 */
  readonly snatchTreasureSharedBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分夺宝奖券数据 删除 */
  readonly snatchTreasureSharedDestroy?: Maybe<Scalars["String"]>;
  /** 石分夺宝奖券数据 根据id删除 */
  readonly snatchTreasureSharedDestroyById?: Maybe<Scalars["String"]>;
  /** 石分夺宝奖券数据 新增 or 修改 */
  readonly snatchTreasureTicket?: Maybe<Scalars["String"]>;
  /** 石分夺宝奖券数据 批量 新增 or 修改 */
  readonly snatchTreasureTicketBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分夺宝奖券数据 删除 */
  readonly snatchTreasureTicketDestroy?: Maybe<Scalars["String"]>;
  /** 石分夺宝奖券数据 根据id删除 */
  readonly snatchTreasureTicketDestroyById?: Maybe<Scalars["String"]>;
  /** 石分夺宝用户参与记录 新增 or 修改 */
  readonly snatchTreasureUser?: Maybe<Scalars["String"]>;
  /** 石分夺宝用户参与记录 批量 新增 or 修改 */
  readonly snatchTreasureUserBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分夺宝用户参与记录 删除 */
  readonly snatchTreasureUserDestroy?: Maybe<Scalars["String"]>;
  /** 石分夺宝用户参与记录 根据id删除 */
  readonly snatchTreasureUserDestroyById?: Maybe<Scalars["String"]>;
  /** 石分宝账户变更记录 新增 or 修改 */
  readonly stoneAccountRecord?: Maybe<Scalars["String"]>;
  /** 石分宝账户变更记录 批量 新增 or 修改 */
  readonly stoneAccountRecordBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分宝账户变更记录 删除 */
  readonly stoneAccountRecordDestroy?: Maybe<Scalars["String"]>;
  /** 石分宝账户变更记录 根据id删除 */
  readonly stoneAccountRecordDestroyById?: Maybe<Scalars["String"]>;
  /** 石分宝账户充值凭证 新增 or 修改 */
  readonly stoneAccountRecordImage?: Maybe<Scalars["String"]>;
  /** 石分宝账户充值凭证 批量 新增 or 修改 */
  readonly stoneAccountRecordImageBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分宝账户充值凭证 删除 */
  readonly stoneAccountRecordImageDestroy?: Maybe<Scalars["String"]>;
  /** 石分宝账户充值凭证 根据id删除 */
  readonly stoneAccountRecordImageDestroyById?: Maybe<Scalars["String"]>;
  /** 石分宝账户对应小区关系表 新增 or 修改 */
  readonly stoneAccountResidential?: Maybe<Scalars["String"]>;
  /** 石分宝账户对应小区关系表 批量 新增 or 修改 */
  readonly stoneAccountResidentialBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分宝账户对应小区关系表 删除 */
  readonly stoneAccountResidentialDestroy?: Maybe<Scalars["String"]>;
  /** 石分宝账户对应小区关系表 根据id删除 */
  readonly stoneAccountResidentialDestroyById?: Maybe<Scalars["String"]>;
  /** 石分宝、达人值变更记录 新增 or 修改 */
  readonly stoneScore?: Maybe<Scalars["String"]>;
  /** 石分宝账户 新增 or 修改 */
  readonly stoneScoreAccount?: Maybe<Scalars["String"]>;
  /** 石分宝账户 批量 新增 or 修改 */
  readonly stoneScoreAccountBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分宝账户 删除 */
  readonly stoneScoreAccountDestroy?: Maybe<Scalars["String"]>;
  /** 石分宝账户 根据id删除 */
  readonly stoneScoreAccountDestroyById?: Maybe<Scalars["String"]>;
  /** 石分宝、达人值变更记录 批量 新增 or 修改 */
  readonly stoneScoreBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 石分宝、达人值变更记录 删除 */
  readonly stoneScoreDestroy?: Maybe<Scalars["String"]>;
  /** 石分宝、达人值变更记录 根据id删除 */
  readonly stoneScoreDestroyById?: Maybe<Scalars["String"]>;
  /** 石分宝积分关联表 新增 or 修改 */
  readonly stoneScoreRelation?: Maybe<Scalars["String"]>;
  /** 石分宝积分关联表 批量 新增 or 修改 */
  readonly stoneScoreRelationBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分宝积分关联表 删除 */
  readonly stoneScoreRelationDestroy?: Maybe<Scalars["String"]>;
  /** 石分宝积分关联表 根据id删除 */
  readonly stoneScoreRelationDestroyById?: Maybe<Scalars["String"]>;
  /** 石分宝发放记录 新增 or 修改 */
  readonly stoneScoreRewardDetails?: Maybe<Scalars["String"]>;
  /** 石分宝发放记录 批量 新增 or 修改 */
  readonly stoneScoreRewardDetailsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 石分宝发放记录 删除 */
  readonly stoneScoreRewardDetailsDestroy?: Maybe<Scalars["String"]>;
  /** 石分宝发放记录 根据id删除 */
  readonly stoneScoreRewardDetailsDestroyById?: Maybe<Scalars["String"]>;
  /** 用户等级设置 新增 or 修改 */
  readonly stoneTalentLevel?: Maybe<Scalars["String"]>;
  /** 用户等级设置 批量 新增 or 修改 */
  readonly stoneTalentLevelBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 用户等级设置 删除 */
  readonly stoneTalentLevelDestroy?: Maybe<Scalars["String"]>;
  /** 用户等级设置 根据id删除 */
  readonly stoneTalentLevelDestroyById?: Maybe<Scalars["String"]>;
  /** 用户等级奖励说明 新增 or 修改 */
  readonly stoneTalentLevelEntry?: Maybe<Scalars["String"]>;
  /** 用户等级奖励说明 批量 新增 or 修改 */
  readonly stoneTalentLevelEntryBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 用户等级奖励说明 删除 */
  readonly stoneTalentLevelEntryDestroy?: Maybe<Scalars["String"]>;
  /** 用户等级奖励说明 根据id删除 */
  readonly stoneTalentLevelEntryDestroyById?: Maybe<Scalars["String"]>;
  /** 物流信息记录表 新增 or 修改 */
  readonly trackingOrder?: Maybe<Scalars["String"]>;
  /** 物流信息记录表 批量 新增 or 修改 */
  readonly trackingOrderBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 物流信息记录表 删除 */
  readonly trackingOrderDestroy?: Maybe<Scalars["String"]>;
  /** 物流信息记录表 根据id删除 */
  readonly trackingOrderDestroyById?: Maybe<Scalars["String"]>;
  /** 物流信息记录表 新增 or 修改 */
  readonly trackingOrderLog?: Maybe<Scalars["String"]>;
  /** 物流信息记录表 批量 新增 or 修改 */
  readonly trackingOrderLogBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 物流信息记录表 删除 */
  readonly trackingOrderLogDestroy?: Maybe<Scalars["String"]>;
  /** 物流信息记录表 根据id删除 */
  readonly trackingOrderLogDestroyById?: Maybe<Scalars["String"]>;
  /** 垃圾桶tcp 新增 or 修改 */
  readonly trashTcp?: Maybe<Scalars["String"]>;
  /** 垃圾桶tcp 批量 新增 or 修改 */
  readonly trashTcpBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 垃圾桶tcp 删除 */
  readonly trashTcpDestroy?: Maybe<Scalars["String"]>;
  /** 垃圾桶tcp 根据id删除 */
  readonly trashTcpDestroyById?: Maybe<Scalars["String"]>;
  /** 点亮值记录表 新增 or 修改 */
  readonly upvoteRecord?: Maybe<Scalars["String"]>;
  /** 点亮值记录表 批量 新增 or 修改 */
  readonly upvoteRecordBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 点亮值记录表 删除 */
  readonly upvoteRecordDestroy?: Maybe<Scalars["String"]>;
  /** 点亮值记录表 根据id删除 */
  readonly upvoteRecordDestroyById?: Maybe<Scalars["String"]>;
  /** 小程序角色权限区域 新增 or 修改 */
  readonly userPowerLocation?: Maybe<Scalars["String"]>;
  /** 小程序角色权限区域 批量 新增 or 修改 */
  readonly userPowerLocationBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** 小程序角色权限区域 删除 */
  readonly userPowerLocationDestroy?: Maybe<Scalars["String"]>;
  /** 小程序角色权限区域 根据id删除 */
  readonly userPowerLocationDestroyById?: Maybe<Scalars["String"]>;
  /** VIEW 新增 or 修改 */
  readonly vAppUser?: Maybe<Scalars["String"]>;
  /** VIEW 批量 新增 or 修改 */
  readonly vAppUserBulk?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** VIEW 删除 */
  readonly vAppUserDestroy?: Maybe<Scalars["String"]>;
  /** VIEW 根据id删除 */
  readonly vAppUserDestroyById?: Maybe<Scalars["String"]>;
  /** VIEW 新增 or 修改 */
  readonly vAppUserExpRanking?: Maybe<Scalars["String"]>;
  /** VIEW 批量 新增 or 修改 */
  readonly vAppUserExpRankingBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** VIEW 删除 */
  readonly vAppUserExpRankingDestroy?: Maybe<Scalars["String"]>;
  /** VIEW 根据id删除 */
  readonly vAppUserExpRankingDestroyById?: Maybe<Scalars["String"]>;
  /** VIEW 新增 or 修改 */
  readonly vAppUserUpvoteRanking?: Maybe<Scalars["String"]>;
  /** VIEW 批量 新增 or 修改 */
  readonly vAppUserUpvoteRankingBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** VIEW 删除 */
  readonly vAppUserUpvoteRankingDestroy?: Maybe<Scalars["String"]>;
  /** VIEW 根据id删除 */
  readonly vAppUserUpvoteRankingDestroyById?: Maybe<Scalars["String"]>;
  /** VIEW 新增 or 修改 */
  readonly vCommunityUpvoteRanking?: Maybe<Scalars["String"]>;
  /** VIEW 批量 新增 or 修改 */
  readonly vCommunityUpvoteRankingBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** VIEW 删除 */
  readonly vCommunityUpvoteRankingDestroy?: Maybe<Scalars["String"]>;
  /** VIEW 根据id删除 */
  readonly vCommunityUpvoteRankingDestroyById?: Maybe<Scalars["String"]>;
  /** VIEW 新增 or 修改 */
  readonly vGroupShoppingGoods?: Maybe<Scalars["String"]>;
  /** VIEW 批量 新增 or 修改 */
  readonly vGroupShoppingGoodsBulk?: Maybe<
    ReadonlyArray<Maybe<Scalars["JSONObject"]>>
  >;
  /** VIEW 删除 */
  readonly vGroupShoppingGoodsDestroy?: Maybe<Scalars["String"]>;
  /** VIEW 根据id删除 */
  readonly vGroupShoppingGoodsDestroyById?: Maybe<Scalars["String"]>;
};

export type MutationActivitySettingsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ActivitySettingsSaveIn;
};

export type MutationActivitySettingsBulkArgs = {
  param: ReadonlyArray<Maybe<ActivitySettingsSaveIn>>;
};

export type MutationActivitySettingsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationActivitySettingsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationAddressLibraryArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: AddressLibrarySaveIn;
};

export type MutationAddressLibraryActivityArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: AddressLibraryActivitySaveIn;
};

export type MutationAddressLibraryActivityBulkArgs = {
  param: ReadonlyArray<Maybe<AddressLibraryActivitySaveIn>>;
};

export type MutationAddressLibraryActivityCreateArgs = {
  param: AddressLibraryActivitySaveIn;
};

export type MutationAddressLibraryActivityDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationAddressLibraryActivityDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationAddressLibraryBulkArgs = {
  param: ReadonlyArray<Maybe<AddressLibrarySaveIn>>;
};

export type MutationAddressLibraryDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationAddressLibraryDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationAppUserArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: AppUserSaveIn;
};

export type MutationAppUserActivityArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: AppUserActivitySaveIn;
};

export type MutationAppUserActivityBulkArgs = {
  param: ReadonlyArray<Maybe<AppUserActivitySaveIn>>;
};

export type MutationAppUserActivityDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationAppUserActivityDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationAppUserAddressArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: AppUserAddressSaveIn;
};

export type MutationAppUserAddressBulkArgs = {
  param: ReadonlyArray<Maybe<AppUserAddressSaveIn>>;
};

export type MutationAppUserAddressDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationAppUserAddressDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationAppUserBulkArgs = {
  param: ReadonlyArray<Maybe<AppUserSaveIn>>;
};

export type MutationAppUserDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationAppUserDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationAppUserDetailsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: AppUserDetailsSaveIn;
};

export type MutationAppUserDetailsBulkArgs = {
  param: ReadonlyArray<Maybe<AppUserDetailsSaveIn>>;
};

export type MutationAppUserDetailsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationAppUserDetailsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationAppUserInviteArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: AppUserInviteSaveIn;
};

export type MutationAppUserInviteBulkArgs = {
  param: ReadonlyArray<Maybe<AppUserInviteSaveIn>>;
};

export type MutationAppUserInviteDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationAppUserInviteDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationAppUserPowerArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: AppUserPowerSaveIn;
};

export type MutationAppUserPowerBulkArgs = {
  param: ReadonlyArray<Maybe<AppUserPowerSaveIn>>;
};

export type MutationAppUserPowerDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationAppUserPowerDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationAppUserUpvoteArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: AppUserUpvoteSaveIn;
};

export type MutationAppUserUpvoteBulkArgs = {
  param: ReadonlyArray<Maybe<AppUserUpvoteSaveIn>>;
};

export type MutationAppUserUpvoteDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationAppUserUpvoteDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationArrangementArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ArrangementSaveIn;
};

export type MutationArrangementBulkArgs = {
  param: ReadonlyArray<Maybe<ArrangementSaveIn>>;
};

export type MutationArrangementDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationArrangementDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationArticleArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ArticleSaveIn;
};

export type MutationArticleBulkArgs = {
  param: ReadonlyArray<Maybe<ArticleSaveIn>>;
};

export type MutationArticleDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationArticleDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationArticleFileArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ArticleFileSaveIn;
};

export type MutationArticleFileBulkArgs = {
  param: ReadonlyArray<Maybe<ArticleFileSaveIn>>;
};

export type MutationArticleFileDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationArticleFileDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationArticleReadRecordArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ArticleReadRecordSaveIn;
};

export type MutationArticleReadRecordBulkArgs = {
  param: ReadonlyArray<Maybe<ArticleReadRecordSaveIn>>;
};

export type MutationArticleReadRecordDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationArticleReadRecordDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationBussinessActivityArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: BussinessActivitySaveIn;
};

export type MutationBussinessActivityBulkArgs = {
  param: ReadonlyArray<Maybe<BussinessActivitySaveIn>>;
};

export type MutationBussinessActivityDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationBussinessActivityDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationBussinessAdvertisingRewardArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: BussinessAdvertisingRewardSaveIn;
};

export type MutationBussinessAdvertisingRewardBulkArgs = {
  param: ReadonlyArray<Maybe<BussinessAdvertisingRewardSaveIn>>;
};

export type MutationBussinessAdvertisingRewardDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationBussinessAdvertisingRewardDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCardCodeTempArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CardCodeTempSaveIn;
};

export type MutationCardCodeTempBulkArgs = {
  param: ReadonlyArray<Maybe<CardCodeTempSaveIn>>;
};

export type MutationCardCodeTempCreateArgs = {
  param: CardCodeTempSaveIn;
};

export type MutationCardCodeTempDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCardCodeTempDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCardCodeTempNanoIdArgs = {
  count?: Maybe<Scalars["Int"]>;
  prefix?: Maybe<Scalars["String"]>;
  start?: Maybe<Scalars["Int"]>;
};

export type MutationCommentBoardArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CommentBoardSaveIn;
};

export type MutationCommentBoardBulkArgs = {
  param: ReadonlyArray<Maybe<CommentBoardSaveIn>>;
};

export type MutationCommentBoardDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCommentBoardDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCommentBoardLogArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CommentBoardLogSaveIn;
};

export type MutationCommentBoardLogBulkArgs = {
  param: ReadonlyArray<Maybe<CommentBoardLogSaveIn>>;
};

export type MutationCommentBoardLogDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCommentBoardLogDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCommentBoardStatArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CommentBoardStatSaveIn;
};

export type MutationCommentBoardStatBulkArgs = {
  param: ReadonlyArray<Maybe<CommentBoardStatSaveIn>>;
};

export type MutationCommentBoardStatDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCommentBoardStatDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCommentBoardVoteArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CommentBoardVoteSaveIn;
};

export type MutationCommentBoardVoteBulkArgs = {
  param: ReadonlyArray<Maybe<CommentBoardVoteSaveIn>>;
};

export type MutationCommentBoardVoteDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCommentBoardVoteDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCommentBoardVoteScoreArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CommentBoardVoteScoreSaveIn;
};

export type MutationCommentBoardVoteScoreBulkArgs = {
  param: ReadonlyArray<Maybe<CommentBoardVoteScoreSaveIn>>;
};

export type MutationCommentBoardVoteScoreDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCommentBoardVoteScoreDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCommentClassifyArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CommentClassifySaveIn;
};

export type MutationCommentClassifyBulkArgs = {
  param: ReadonlyArray<Maybe<CommentClassifySaveIn>>;
};

export type MutationCommentClassifyDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCommentClassifyDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCommentImageArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CommentImageSaveIn;
};

export type MutationCommentImageBulkArgs = {
  param: ReadonlyArray<Maybe<CommentImageSaveIn>>;
};

export type MutationCommentImageDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCommentImageDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCommentScoreLevelArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CommentScoreLevelSaveIn;
};

export type MutationCommentScoreLevelBulkArgs = {
  param: ReadonlyArray<Maybe<CommentScoreLevelSaveIn>>;
};

export type MutationCommentScoreLevelDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCommentScoreLevelDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCommunityUpvoteArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CommunityUpvoteSaveIn;
};

export type MutationCommunityUpvoteActivityArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CommunityUpvoteActivitySaveIn;
};

export type MutationCommunityUpvoteActivityBulkArgs = {
  param: ReadonlyArray<Maybe<CommunityUpvoteActivitySaveIn>>;
};

export type MutationCommunityUpvoteActivityDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCommunityUpvoteActivityDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCommunityUpvoteBulkArgs = {
  param: ReadonlyArray<Maybe<CommunityUpvoteSaveIn>>;
};

export type MutationCommunityUpvoteDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCommunityUpvoteDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCooperationMerchantArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CooperationMerchantSaveIn;
};

export type MutationCooperationMerchantBulkArgs = {
  param: ReadonlyArray<Maybe<CooperationMerchantSaveIn>>;
};

export type MutationCooperationMerchantCouponArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CooperationMerchantCouponSaveIn;
};

export type MutationCooperationMerchantCouponBulkArgs = {
  param: ReadonlyArray<Maybe<CooperationMerchantCouponSaveIn>>;
};

export type MutationCooperationMerchantCouponDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCooperationMerchantCouponDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCooperationMerchantDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCooperationMerchantDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCouponGrantComboSaleArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CouponGrantComboSaleSaveIn;
};

export type MutationCouponGrantComboSaleBulkArgs = {
  param: ReadonlyArray<Maybe<CouponGrantComboSaleSaveIn>>;
};

export type MutationCouponGrantComboSaleDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCouponGrantComboSaleDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCouponGrantExchangeArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CouponGrantExchangeSaveIn;
};

export type MutationCouponGrantExchangeBulkArgs = {
  param: ReadonlyArray<Maybe<CouponGrantExchangeSaveIn>>;
};

export type MutationCouponGrantExchangeDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCouponGrantExchangeDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCouponGrantSpecialOffersArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CouponGrantSpecialOffersSaveIn;
};

export type MutationCouponGrantSpecialOffersBulkArgs = {
  param: ReadonlyArray<Maybe<CouponGrantSpecialOffersSaveIn>>;
};

export type MutationCouponGrantSpecialOffersDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCouponGrantSpecialOffersDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCouponOrderArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CouponOrderSaveIn;
};

export type MutationCouponOrderBulkArgs = {
  param: ReadonlyArray<Maybe<CouponOrderSaveIn>>;
};

export type MutationCouponOrderDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCouponOrderDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCouponOrderLogArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CouponOrderLogSaveIn;
};

export type MutationCouponOrderLogBulkArgs = {
  param: ReadonlyArray<Maybe<CouponOrderLogSaveIn>>;
};

export type MutationCouponOrderLogDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCouponOrderLogDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCouponQrcodeComboSaleArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CouponQrcodeComboSaleSaveIn;
};

export type MutationCouponQrcodeComboSaleBulkArgs = {
  param: ReadonlyArray<Maybe<CouponQrcodeComboSaleSaveIn>>;
};

export type MutationCouponQrcodeComboSaleDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCouponQrcodeComboSaleDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCouponQrcodeExchangeArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CouponQrcodeExchangeSaveIn;
};

export type MutationCouponQrcodeExchangeBulkArgs = {
  param: ReadonlyArray<Maybe<CouponQrcodeExchangeSaveIn>>;
};

export type MutationCouponQrcodeExchangeDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCouponQrcodeExchangeDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCouponQrcodeSpecialOffersArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CouponQrcodeSpecialOffersSaveIn;
};

export type MutationCouponQrcodeSpecialOffersBulkArgs = {
  param: ReadonlyArray<Maybe<CouponQrcodeSpecialOffersSaveIn>>;
};

export type MutationCouponQrcodeSpecialOffersDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCouponQrcodeSpecialOffersDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationCurrencyExchangeRateArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: CurrencyExchangeRateSaveIn;
};

export type MutationCurrencyExchangeRateBulkArgs = {
  param: ReadonlyArray<Maybe<CurrencyExchangeRateSaveIn>>;
};

export type MutationCurrencyExchangeRateDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationCurrencyExchangeRateDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationDataDictionarySystemArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: DataDictionarySystemSaveIn;
};

export type MutationDataDictionarySystemBulkArgs = {
  param: ReadonlyArray<Maybe<DataDictionarySystemSaveIn>>;
};

export type MutationDataDictionarySystemDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationDataDictionarySystemDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationDemoWaterArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: DemoWaterSaveIn;
};

export type MutationDemoWaterBulkArgs = {
  param: ReadonlyArray<Maybe<DemoWaterSaveIn>>;
};

export type MutationDemoWaterDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationDemoWaterDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationEmsCnplAttentionArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: EmsCnplAttentionSaveIn;
};

export type MutationEmsCnplAttentionBulkArgs = {
  param: ReadonlyArray<Maybe<EmsCnplAttentionSaveIn>>;
};

export type MutationEmsCnplAttentionDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationEmsCnplAttentionDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationFileArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: FileSaveIn;
};

export type MutationFileBulkArgs = {
  param: ReadonlyArray<Maybe<FileSaveIn>>;
};

export type MutationFileDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationFileDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationFrontEndCacheArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: FrontEndCacheSaveIn;
};

export type MutationFrontEndCacheBulkArgs = {
  param: ReadonlyArray<Maybe<FrontEndCacheSaveIn>>;
};

export type MutationFrontEndCacheDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationFrontEndCacheDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationGreenViewPointsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: GreenViewPointsSaveIn;
};

export type MutationGreenViewPointsBulkArgs = {
  param: ReadonlyArray<Maybe<GreenViewPointsSaveIn>>;
};

export type MutationGreenViewPointsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationGreenViewPointsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationGroupShoppingGoodsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: GroupShoppingGoodsSaveIn;
};

export type MutationGroupShoppingGoodsBulkArgs = {
  param: ReadonlyArray<Maybe<GroupShoppingGoodsSaveIn>>;
};

export type MutationGroupShoppingGoodsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationGroupShoppingGoodsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationGroupShoppingGoodsOrderArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: GroupShoppingGoodsOrderSaveIn;
};

export type MutationGroupShoppingGoodsOrderBulkArgs = {
  param: ReadonlyArray<Maybe<GroupShoppingGoodsOrderSaveIn>>;
};

export type MutationGroupShoppingGoodsOrderDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationGroupShoppingGoodsOrderDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationHomePageDetailsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: HomePageDetailsSaveIn;
};

export type MutationHomePageDetailsBulkArgs = {
  param: ReadonlyArray<Maybe<HomePageDetailsSaveIn>>;
};

export type MutationHomePageDetailsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationHomePageDetailsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationHomePageSystemArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: HomePageSystemSaveIn;
};

export type MutationHomePageSystemBulkArgs = {
  param: ReadonlyArray<Maybe<HomePageSystemSaveIn>>;
};

export type MutationHomePageSystemDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationHomePageSystemDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationHomePageSystemImageArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: HomePageSystemImageSaveIn;
};

export type MutationHomePageSystemImageBulkArgs = {
  param: ReadonlyArray<Maybe<HomePageSystemImageSaveIn>>;
};

export type MutationHomePageSystemImageDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationHomePageSystemImageDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationIncentiveValueArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: IncentiveValueSaveIn;
};

export type MutationIncentiveValueBulkArgs = {
  param: ReadonlyArray<Maybe<IncentiveValueSaveIn>>;
};

export type MutationIncentiveValueDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationIncentiveValueDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationInhabitantPointsRelationArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: InhabitantPointsRelationSaveIn;
};

export type MutationInhabitantPointsRelationBulkArgs = {
  param: ReadonlyArray<Maybe<InhabitantPointsRelationSaveIn>>;
};

export type MutationInhabitantPointsRelationDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationInhabitantPointsRelationDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationInhabitantPointsRewardDetailsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: InhabitantPointsRewardDetailsSaveIn;
};

export type MutationInhabitantPointsRewardDetailsBulkArgs = {
  param: ReadonlyArray<Maybe<InhabitantPointsRewardDetailsSaveIn>>;
};

export type MutationInhabitantPointsRewardDetailsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationInhabitantPointsRewardDetailsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationJdongApiLogsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: JdongApiLogsSaveIn;
};

export type MutationJdongApiLogsBulkArgs = {
  param: ReadonlyArray<Maybe<JdongApiLogsSaveIn>>;
};

export type MutationJdongApiLogsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationJdongApiLogsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationJdongTrackingOrderArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: JdongTrackingOrderSaveIn;
};

export type MutationJdongTrackingOrderBulkArgs = {
  param: ReadonlyArray<Maybe<JdongTrackingOrderSaveIn>>;
};

export type MutationJdongTrackingOrderDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationJdongTrackingOrderDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationJdongUserBuildingArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: JdongUserBuildingSaveIn;
};

export type MutationJdongUserBuildingBulkArgs = {
  param: ReadonlyArray<Maybe<JdongUserBuildingSaveIn>>;
};

export type MutationJdongUserBuildingDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationJdongUserBuildingDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationLoginLasttimeArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: LoginLasttimeSaveIn;
};

export type MutationLoginLasttimeBulkArgs = {
  param: ReadonlyArray<Maybe<LoginLasttimeSaveIn>>;
};

export type MutationLoginLasttimeDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationLoginLasttimeDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationLoginRecordArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: LoginRecordSaveIn;
};

export type MutationLoginRecordBulkArgs = {
  param: ReadonlyArray<Maybe<LoginRecordSaveIn>>;
};

export type MutationLoginRecordDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationLoginRecordDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationLotteryDrawActivityArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: LotteryDrawActivitySaveIn;
};

export type MutationLotteryDrawActivityBulkArgs = {
  param: ReadonlyArray<Maybe<LotteryDrawActivitySaveIn>>;
};

export type MutationLotteryDrawActivityDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationLotteryDrawActivityDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationLotteryDrawRecordArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: LotteryDrawRecordSaveIn;
};

export type MutationLotteryDrawRecordBulkArgs = {
  param: ReadonlyArray<Maybe<LotteryDrawRecordSaveIn>>;
};

export type MutationLotteryDrawRecordDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationLotteryDrawRecordDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationLuckyStarWishesArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: LuckyStarWishesSaveIn;
};

export type MutationLuckyStarWishesBulkArgs = {
  param: ReadonlyArray<Maybe<LuckyStarWishesSaveIn>>;
};

export type MutationLuckyStarWishesDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationLuckyStarWishesDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationMailAddressArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: MailAddressSaveIn;
};

export type MutationMailAddressBulkArgs = {
  param: ReadonlyArray<Maybe<MailAddressSaveIn>>;
};

export type MutationMailAddressDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationMailAddressDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationMapPointArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: MapPointSaveIn;
};

export type MutationMapPointBulkArgs = {
  param: ReadonlyArray<Maybe<MapPointSaveIn>>;
};

export type MutationMapPointCreateArgs = {
  param: MapPointSaveIn;
};

export type MutationMapPointDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationMapPointDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationMessageQueueJobsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: MessageQueueJobsSaveIn;
};

export type MutationMessageQueueJobsBulkArgs = {
  param: ReadonlyArray<Maybe<MessageQueueJobsSaveIn>>;
};

export type MutationMessageQueueJobsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationMessageQueueJobsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationPowerArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: PowerSaveIn;
};

export type MutationPowerBulkArgs = {
  param: ReadonlyArray<Maybe<PowerSaveIn>>;
};

export type MutationPowerDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationPowerDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationQuestionAnswerRecordArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: QuestionAnswerRecordSaveIn;
};

export type MutationQuestionAnswerRecordBulkArgs = {
  param: ReadonlyArray<Maybe<QuestionAnswerRecordSaveIn>>;
};

export type MutationQuestionAnswerRecordDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationQuestionAnswerRecordDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationQuestionBankArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: QuestionBankSaveIn;
};

export type MutationQuestionBankBulkArgs = {
  param: ReadonlyArray<Maybe<QuestionBankSaveIn>>;
};

export type MutationQuestionBankDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationQuestionBankDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationQuestionnaireArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: QuestionnaireSaveIn;
};

export type MutationQuestionnaireBulkArgs = {
  param: ReadonlyArray<Maybe<QuestionnaireSaveIn>>;
};

export type MutationQuestionnaireDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationQuestionnaireDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationQuestionnaireLocationArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: QuestionnaireLocationSaveIn;
};

export type MutationQuestionnaireLocationBulkArgs = {
  param: ReadonlyArray<Maybe<QuestionnaireLocationSaveIn>>;
};

export type MutationQuestionnaireLocationDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationQuestionnaireLocationDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationQuestionnaireOptionsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: QuestionnaireOptionsSaveIn;
};

export type MutationQuestionnaireOptionsBulkArgs = {
  param: ReadonlyArray<Maybe<QuestionnaireOptionsSaveIn>>;
};

export type MutationQuestionnaireOptionsCreateArgs = {
  param: QuestionnaireOptionsSaveIn;
};

export type MutationQuestionnaireOptionsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationQuestionnaireOptionsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationQuestionnaireQuestionArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: QuestionnaireQuestionSaveIn;
};

export type MutationQuestionnaireQuestionBulkArgs = {
  param: ReadonlyArray<Maybe<QuestionnaireQuestionSaveIn>>;
};

export type MutationQuestionnaireQuestionCreateArgs = {
  param: QuestionnaireQuestionSaveIn;
};

export type MutationQuestionnaireQuestionDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationQuestionnaireQuestionDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationQuestionnaireUserAnswerArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: QuestionnaireUserAnswerSaveIn;
};

export type MutationQuestionnaireUserAnswerBulkArgs = {
  param: ReadonlyArray<Maybe<QuestionnaireUserAnswerSaveIn>>;
};

export type MutationQuestionnaireUserAnswerCreateArgs = {
  param: QuestionnaireUserAnswerSaveIn;
};

export type MutationQuestionnaireUserAnswerDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationQuestionnaireUserAnswerDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationQuestionnaireUserRecordArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: QuestionnaireUserRecordSaveIn;
};

export type MutationQuestionnaireUserRecordBulkArgs = {
  param: ReadonlyArray<Maybe<QuestionnaireUserRecordSaveIn>>;
};

export type MutationQuestionnaireUserRecordDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationQuestionnaireUserRecordDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationReportArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ReportSaveIn;
};

export type MutationReportBulkArgs = {
  param: ReadonlyArray<Maybe<ReportSaveIn>>;
};

export type MutationReportDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationReportDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationShifenCommunityCardLogsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ShifenCommunityCardLogsSaveIn;
};

export type MutationShifenCommunityCardLogsBulkArgs = {
  param: ReadonlyArray<Maybe<ShifenCommunityCardLogsSaveIn>>;
};

export type MutationShifenCommunityCardLogsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationShifenCommunityCardLogsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationShifenCommunityInhabitantCardArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ShifenCommunityInhabitantCardSaveIn;
};

export type MutationShifenCommunityInhabitantCardBulkArgs = {
  param: ReadonlyArray<Maybe<ShifenCommunityInhabitantCardSaveIn>>;
};

export type MutationShifenCommunityInhabitantCardCreateArgs = {
  param: ShifenCommunityInhabitantCardSaveIn;
};

export type MutationShifenCommunityInhabitantCardDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationShifenCommunityInhabitantCardDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationShifenCommunityInhabitantPointsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ShifenCommunityInhabitantPointsSaveIn;
};

export type MutationShifenCommunityInhabitantPointsBulkArgs = {
  param: ReadonlyArray<Maybe<ShifenCommunityInhabitantPointsSaveIn>>;
};

export type MutationShifenCommunityInhabitantPointsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationShifenCommunityInhabitantPointsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationShifenCommunityInhabitantTransferArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ShifenCommunityInhabitantTransferSaveIn;
};

export type MutationShifenCommunityInhabitantTransferBulkArgs = {
  param: ReadonlyArray<Maybe<ShifenCommunityInhabitantTransferSaveIn>>;
};

export type MutationShifenCommunityInhabitantTransferDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationShifenCommunityInhabitantTransferDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationShifenCommunityPointsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ShifenCommunityPointsSaveIn;
};

export type MutationShifenCommunityPointsBulkArgs = {
  param: ReadonlyArray<Maybe<ShifenCommunityPointsSaveIn>>;
};

export type MutationShifenCommunityPointsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationShifenCommunityPointsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationShifenCommunityPointsImageArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ShifenCommunityPointsImageSaveIn;
};

export type MutationShifenCommunityPointsImageBulkArgs = {
  param: ReadonlyArray<Maybe<ShifenCommunityPointsImageSaveIn>>;
};

export type MutationShifenCommunityPointsImageDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationShifenCommunityPointsImageDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationShoppingGoodsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ShoppingGoodsSaveIn;
};

export type MutationShoppingGoodsBulkArgs = {
  param: ReadonlyArray<Maybe<ShoppingGoodsSaveIn>>;
};

export type MutationShoppingGoodsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationShoppingGoodsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationShoppingGoodsImageArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ShoppingGoodsImageSaveIn;
};

export type MutationShoppingGoodsImageBulkArgs = {
  param: ReadonlyArray<Maybe<ShoppingGoodsImageSaveIn>>;
};

export type MutationShoppingGoodsImageDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationShoppingGoodsImageDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationShoppingGoodsStockArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ShoppingGoodsStockSaveIn;
};

export type MutationShoppingGoodsStockBulkArgs = {
  param: ReadonlyArray<Maybe<ShoppingGoodsStockSaveIn>>;
};

export type MutationShoppingGoodsStockDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationShoppingGoodsStockDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationShouhuojiyunPointsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: ShouhuojiyunPointsSaveIn;
};

export type MutationShouhuojiyunPointsBulkArgs = {
  param: ReadonlyArray<Maybe<ShouhuojiyunPointsSaveIn>>;
};

export type MutationShouhuojiyunPointsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationShouhuojiyunPointsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationSignInLabelArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: SignInLabelSaveIn;
};

export type MutationSignInLabelBulkArgs = {
  param: ReadonlyArray<Maybe<SignInLabelSaveIn>>;
};

export type MutationSignInLabelDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationSignInLabelDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationSignInRecordArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: SignInRecordSaveIn;
};

export type MutationSignInRecordBulkArgs = {
  param: ReadonlyArray<Maybe<SignInRecordSaveIn>>;
};

export type MutationSignInRecordDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationSignInRecordDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationSignInSharedArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: SignInSharedSaveIn;
};

export type MutationSignInSharedBulkArgs = {
  param: ReadonlyArray<Maybe<SignInSharedSaveIn>>;
};

export type MutationSignInSharedDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationSignInSharedDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationSmsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: SmsSaveIn;
};

export type MutationSmsBulkArgs = {
  param: ReadonlyArray<Maybe<SmsSaveIn>>;
};

export type MutationSmsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationSmsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationSnatchLotteryRunLogArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: SnatchLotteryRunLogSaveIn;
};

export type MutationSnatchLotteryRunLogBulkArgs = {
  param: ReadonlyArray<Maybe<SnatchLotteryRunLogSaveIn>>;
};

export type MutationSnatchLotteryRunLogDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationSnatchLotteryRunLogDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationSnatchTreasureArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: SnatchTreasureSaveIn;
};

export type MutationSnatchTreasureBulkArgs = {
  param: ReadonlyArray<Maybe<SnatchTreasureSaveIn>>;
};

export type MutationSnatchTreasureDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationSnatchTreasureDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationSnatchTreasureRecordArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: SnatchTreasureRecordSaveIn;
};

export type MutationSnatchTreasureRecordBulkArgs = {
  param: ReadonlyArray<Maybe<SnatchTreasureRecordSaveIn>>;
};

export type MutationSnatchTreasureRecordDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationSnatchTreasureRecordDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationSnatchTreasureSharedArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: SnatchTreasureSharedSaveIn;
};

export type MutationSnatchTreasureSharedBulkArgs = {
  param: ReadonlyArray<Maybe<SnatchTreasureSharedSaveIn>>;
};

export type MutationSnatchTreasureSharedDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationSnatchTreasureSharedDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationSnatchTreasureTicketArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: SnatchTreasureTicketSaveIn;
};

export type MutationSnatchTreasureTicketBulkArgs = {
  param: ReadonlyArray<Maybe<SnatchTreasureTicketSaveIn>>;
};

export type MutationSnatchTreasureTicketDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationSnatchTreasureTicketDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationSnatchTreasureUserArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: SnatchTreasureUserSaveIn;
};

export type MutationSnatchTreasureUserBulkArgs = {
  param: ReadonlyArray<Maybe<SnatchTreasureUserSaveIn>>;
};

export type MutationSnatchTreasureUserDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationSnatchTreasureUserDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationStoneAccountRecordArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: StoneAccountRecordSaveIn;
};

export type MutationStoneAccountRecordBulkArgs = {
  param: ReadonlyArray<Maybe<StoneAccountRecordSaveIn>>;
};

export type MutationStoneAccountRecordDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationStoneAccountRecordDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationStoneAccountRecordImageArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: StoneAccountRecordImageSaveIn;
};

export type MutationStoneAccountRecordImageBulkArgs = {
  param: ReadonlyArray<Maybe<StoneAccountRecordImageSaveIn>>;
};

export type MutationStoneAccountRecordImageDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationStoneAccountRecordImageDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationStoneAccountResidentialArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: StoneAccountResidentialSaveIn;
};

export type MutationStoneAccountResidentialBulkArgs = {
  param: ReadonlyArray<Maybe<StoneAccountResidentialSaveIn>>;
};

export type MutationStoneAccountResidentialDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationStoneAccountResidentialDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationStoneScoreArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: StoneScoreSaveIn;
};

export type MutationStoneScoreAccountArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: StoneScoreAccountSaveIn;
};

export type MutationStoneScoreAccountBulkArgs = {
  param: ReadonlyArray<Maybe<StoneScoreAccountSaveIn>>;
};

export type MutationStoneScoreAccountDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationStoneScoreAccountDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationStoneScoreBulkArgs = {
  param: ReadonlyArray<Maybe<StoneScoreSaveIn>>;
};

export type MutationStoneScoreDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationStoneScoreDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationStoneScoreRelationArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: StoneScoreRelationSaveIn;
};

export type MutationStoneScoreRelationBulkArgs = {
  param: ReadonlyArray<Maybe<StoneScoreRelationSaveIn>>;
};

export type MutationStoneScoreRelationDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationStoneScoreRelationDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationStoneScoreRewardDetailsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: StoneScoreRewardDetailsSaveIn;
};

export type MutationStoneScoreRewardDetailsBulkArgs = {
  param: ReadonlyArray<Maybe<StoneScoreRewardDetailsSaveIn>>;
};

export type MutationStoneScoreRewardDetailsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationStoneScoreRewardDetailsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationStoneTalentLevelArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: StoneTalentLevelSaveIn;
};

export type MutationStoneTalentLevelBulkArgs = {
  param: ReadonlyArray<Maybe<StoneTalentLevelSaveIn>>;
};

export type MutationStoneTalentLevelDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationStoneTalentLevelDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationStoneTalentLevelEntryArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: StoneTalentLevelEntrySaveIn;
};

export type MutationStoneTalentLevelEntryBulkArgs = {
  param: ReadonlyArray<Maybe<StoneTalentLevelEntrySaveIn>>;
};

export type MutationStoneTalentLevelEntryDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationStoneTalentLevelEntryDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationTrackingOrderArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: TrackingOrderSaveIn;
};

export type MutationTrackingOrderBulkArgs = {
  param: ReadonlyArray<Maybe<TrackingOrderSaveIn>>;
};

export type MutationTrackingOrderDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationTrackingOrderDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationTrackingOrderLogArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: TrackingOrderLogSaveIn;
};

export type MutationTrackingOrderLogBulkArgs = {
  param: ReadonlyArray<Maybe<TrackingOrderLogSaveIn>>;
};

export type MutationTrackingOrderLogDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationTrackingOrderLogDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationTrashTcpArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: TrashTcpSaveIn;
};

export type MutationTrashTcpBulkArgs = {
  param: ReadonlyArray<Maybe<TrashTcpSaveIn>>;
};

export type MutationTrashTcpDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationTrashTcpDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationUpvoteRecordArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: UpvoteRecordSaveIn;
};

export type MutationUpvoteRecordBulkArgs = {
  param: ReadonlyArray<Maybe<UpvoteRecordSaveIn>>;
};

export type MutationUpvoteRecordDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationUpvoteRecordDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationUserPowerLocationArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: UserPowerLocationSaveIn;
};

export type MutationUserPowerLocationBulkArgs = {
  param: ReadonlyArray<Maybe<UserPowerLocationSaveIn>>;
};

export type MutationUserPowerLocationDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationUserPowerLocationDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationVAppUserArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: VAppUserSaveIn;
};

export type MutationVAppUserBulkArgs = {
  param: ReadonlyArray<Maybe<VAppUserSaveIn>>;
};

export type MutationVAppUserDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationVAppUserDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationVAppUserExpRankingArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: VAppUserExpRankingSaveIn;
};

export type MutationVAppUserExpRankingBulkArgs = {
  param: ReadonlyArray<Maybe<VAppUserExpRankingSaveIn>>;
};

export type MutationVAppUserExpRankingDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationVAppUserExpRankingDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationVAppUserUpvoteRankingArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: VAppUserUpvoteRankingSaveIn;
};

export type MutationVAppUserUpvoteRankingBulkArgs = {
  param: ReadonlyArray<Maybe<VAppUserUpvoteRankingSaveIn>>;
};

export type MutationVAppUserUpvoteRankingDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationVAppUserUpvoteRankingDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationVCommunityUpvoteRankingArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: VCommunityUpvoteRankingSaveIn;
};

export type MutationVCommunityUpvoteRankingBulkArgs = {
  param: ReadonlyArray<Maybe<VCommunityUpvoteRankingSaveIn>>;
};

export type MutationVCommunityUpvoteRankingDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationVCommunityUpvoteRankingDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type MutationVGroupShoppingGoodsArgs = {
  must?: Maybe<Scalars["Boolean"]>;
  param: VGroupShoppingGoodsSaveIn;
};

export type MutationVGroupShoppingGoodsBulkArgs = {
  param: ReadonlyArray<Maybe<VGroupShoppingGoodsSaveIn>>;
};

export type MutationVGroupShoppingGoodsDestroyArgs = {
  limit?: Maybe<Scalars["Int"]>;
  where: Scalars["JSONObject"];
};

export type MutationVGroupShoppingGoodsDestroyByIdArgs = {
  id?: Maybe<Scalars["String"]>;
};

/** 小程序角色权限表 */
export type Power = {
  readonly __typename?: "Power";
  readonly appUserPowerPowerId?: Maybe<ReadonlyArray<Maybe<AppUserPower>>>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 用户角色权限(communityWork, 工作人员; recovery, 回收人员; largeClean, 清运人员) */
  readonly power?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 小程序角色权限表 */
export type PowerAppUserPowerPowerIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 小程序角色权限表 分页查询返回 */
export type PowerList = {
  readonly __typename?: "PowerList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<Power>>>;
};

export type PowerSaveIn = {
  readonly appUserPowerPowerId?: Maybe<
    ReadonlyArray<Maybe<AppUserPowerSaveIn>>
  >;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 用户角色权限(communityWork, 工作人员; recovery, 回收人员; largeClean, 清运人员) */
  readonly power?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type Query = {
  readonly __typename?: "Query";
  /** 活动设置  id 获取 */
  readonly activitySettings?: Maybe<ActivitySettings>;
  /** 活动设置 有条件返回 */
  readonly activitySettingsAll?: Maybe<ReadonlyArray<Maybe<ActivitySettings>>>;
  /** 活动设置 总行数 */
  readonly activitySettingsCount?: Maybe<Scalars["Int"]>;
  /** 活动设置 分页查询 */
  readonly activitySettingsList?: Maybe<ActivitySettingsList>;
  /** 地址库  id 获取 */
  readonly addressLibrary?: Maybe<AddressLibrary>;
  /** 社区启用活动表  id 获取 */
  readonly addressLibraryActivity?: Maybe<AddressLibraryActivity>;
  /** 社区启用活动表 有条件返回 */
  readonly addressLibraryActivityAll?: Maybe<
    ReadonlyArray<Maybe<AddressLibraryActivity>>
  >;
  /** 社区启用活动表 总行数 */
  readonly addressLibraryActivityCount?: Maybe<Scalars["Int"]>;
  /** 社区启用活动表 分页查询 */
  readonly addressLibraryActivityList?: Maybe<AddressLibraryActivityList>;
  /** 地址库 有条件返回 */
  readonly addressLibraryAll?: Maybe<ReadonlyArray<Maybe<AddressLibrary>>>;
  /** 地址库 总行数 */
  readonly addressLibraryCount?: Maybe<Scalars["Int"]>;
  /** 地址库 分页查询 */
  readonly addressLibraryList?: Maybe<AddressLibraryList>;
  /**
   * {
   *   aggregate(modelName:"appUserCommunity"
   *     field:"guideLaunchNumber"
   *     aggregateFunction:SUM
   *     options:{
   *       where:{
   *         communityId:"1274254823121747968"
   *       }
   *     }
   *   )
   * }
   */
  readonly aggregate?: Maybe<Scalars["JSONObject"]>;
  /** 围栏设备监控 locations:116.472407,39.993322,1484816232, 匹配到则返回电子围栏名称未匹配到则返回空 */
  readonly amapGeofenceStatus?: Maybe<Scalars["JSONObject"]>;
  /** 查询围栏 */
  readonly amapGetGeofenceMeta?: Maybe<Scalars["JSONObject"]>;
  /** 终端用户  id 获取 */
  readonly appUser?: Maybe<AppUser>;
  /** 用户活动记录表  id 获取 */
  readonly appUserActivity?: Maybe<AppUserActivity>;
  /** 用户活动记录表 有条件返回 */
  readonly appUserActivityAll?: Maybe<ReadonlyArray<Maybe<AppUserActivity>>>;
  /** 用户活动记录表 总行数 */
  readonly appUserActivityCount?: Maybe<Scalars["Int"]>;
  /** 用户活动记录表 分页查询 */
  readonly appUserActivityList?: Maybe<AppUserActivityList>;
  /** 用户明细表  id 获取 */
  readonly appUserAddress?: Maybe<AppUserAddress>;
  /** 用户明细表 有条件返回 */
  readonly appUserAddressAll?: Maybe<ReadonlyArray<Maybe<AppUserAddress>>>;
  /** 用户明细表 总行数 */
  readonly appUserAddressCount?: Maybe<Scalars["Int"]>;
  /** 用户明细表 分页查询 */
  readonly appUserAddressList?: Maybe<AppUserAddressList>;
  /** 终端用户 有条件返回 */
  readonly appUserAll?: Maybe<ReadonlyArray<Maybe<AppUser>>>;
  /** 终端用户 总行数 */
  readonly appUserCount?: Maybe<Scalars["Int"]>;
  /** 用户基础信息表  id 获取 */
  readonly appUserDetails?: Maybe<AppUserDetails>;
  /** 用户基础信息表 有条件返回 */
  readonly appUserDetailsAll?: Maybe<ReadonlyArray<Maybe<AppUserDetails>>>;
  /** 用户基础信息表 总行数 */
  readonly appUserDetailsCount?: Maybe<Scalars["Int"]>;
  /** 用户基础信息表 分页查询 */
  readonly appUserDetailsList?: Maybe<AppUserDetailsList>;
  /** 邀请注册表  id 获取 */
  readonly appUserInvite?: Maybe<AppUserInvite>;
  /** 邀请注册表 有条件返回 */
  readonly appUserInviteAll?: Maybe<ReadonlyArray<Maybe<AppUserInvite>>>;
  /** 邀请注册表 总行数 */
  readonly appUserInviteCount?: Maybe<Scalars["Int"]>;
  /** 邀请注册表 分页查询 */
  readonly appUserInviteList?: Maybe<AppUserInviteList>;
  /** 终端用户 分页查询 */
  readonly appUserList?: Maybe<AppUserList>;
  /** 小程序用户角色权限列表  id 获取 */
  readonly appUserPower?: Maybe<AppUserPower>;
  /** 小程序用户角色权限列表 有条件返回 */
  readonly appUserPowerAll?: Maybe<ReadonlyArray<Maybe<AppUserPower>>>;
  /** 小程序用户角色权限列表 总行数 */
  readonly appUserPowerCount?: Maybe<Scalars["Int"]>;
  /** 小程序用户角色权限列表 分页查询 */
  readonly appUserPowerList?: Maybe<AppUserPowerList>;
  /** 用户点亮值  id 获取 */
  readonly appUserUpvote?: Maybe<AppUserUpvote>;
  /** 用户点亮值 有条件返回 */
  readonly appUserUpvoteAll?: Maybe<ReadonlyArray<Maybe<AppUserUpvote>>>;
  /** 用户点亮值 总行数 */
  readonly appUserUpvoteCount?: Maybe<Scalars["Int"]>;
  /** 用户点亮值 分页查询 */
  readonly appUserUpvoteList?: Maybe<AppUserUpvoteList>;
  /** 排列5记录  id 获取 */
  readonly arrangement?: Maybe<Arrangement>;
  /** 排列5记录 有条件返回 */
  readonly arrangementAll?: Maybe<ReadonlyArray<Maybe<Arrangement>>>;
  /** 排列5记录 总行数 */
  readonly arrangementCount?: Maybe<Scalars["Int"]>;
  /** 排列5记录 分页查询 */
  readonly arrangementList?: Maybe<ArrangementList>;
  /** 文章记录表  id 获取 */
  readonly article?: Maybe<Article>;
  /** 文章记录表 有条件返回 */
  readonly articleAll?: Maybe<ReadonlyArray<Maybe<Article>>>;
  /** 文章记录表 总行数 */
  readonly articleCount?: Maybe<Scalars["Int"]>;
  /** 文章文件表  id 获取 */
  readonly articleFile?: Maybe<ArticleFile>;
  /** 文章文件表 有条件返回 */
  readonly articleFileAll?: Maybe<ReadonlyArray<Maybe<ArticleFile>>>;
  /** 文章文件表 总行数 */
  readonly articleFileCount?: Maybe<Scalars["Int"]>;
  /** 文章文件表 分页查询 */
  readonly articleFileList?: Maybe<ArticleFileList>;
  /** 文章记录表 分页查询 */
  readonly articleList?: Maybe<ArticleList>;
  /** 文章阅读记录表  id 获取 */
  readonly articleReadRecord?: Maybe<ArticleReadRecord>;
  /** 文章阅读记录表 有条件返回 */
  readonly articleReadRecordAll?: Maybe<
    ReadonlyArray<Maybe<ArticleReadRecord>>
  >;
  /** 文章阅读记录表 总行数 */
  readonly articleReadRecordCount?: Maybe<Scalars["Int"]>;
  /** 文章阅读记录表 分页查询 */
  readonly articleReadRecordList?: Maybe<ArticleReadRecordList>;
  /** 广告列表  id 获取 */
  readonly bussinessActivity?: Maybe<BussinessActivity>;
  /** 广告列表 有条件返回 */
  readonly bussinessActivityAll?: Maybe<
    ReadonlyArray<Maybe<BussinessActivity>>
  >;
  /** 广告列表 总行数 */
  readonly bussinessActivityCount?: Maybe<Scalars["Int"]>;
  /** 广告列表 分页查询 */
  readonly bussinessActivityList?: Maybe<BussinessActivityList>;
  /** 观看广告奖励记录  id 获取 */
  readonly bussinessAdvertisingReward?: Maybe<BussinessAdvertisingReward>;
  /** 观看广告奖励记录 有条件返回 */
  readonly bussinessAdvertisingRewardAll?: Maybe<
    ReadonlyArray<Maybe<BussinessAdvertisingReward>>
  >;
  /** 观看广告奖励记录 总行数 */
  readonly bussinessAdvertisingRewardCount?: Maybe<Scalars["Int"]>;
  /** 观看广告奖励记录 分页查询 */
  readonly bussinessAdvertisingRewardList?: Maybe<BussinessAdvertisingRewardList>;
  /** 根据卡号获取用户信息 */
  readonly cardCodeFindAppUser?: Maybe<CardCodeFindAppUserOut>;
  /** 卡号临时表  id 获取 */
  readonly cardCodeTemp?: Maybe<CardCodeTemp>;
  /** 卡号临时表 有条件返回 */
  readonly cardCodeTempAll?: Maybe<ReadonlyArray<Maybe<CardCodeTemp>>>;
  /** 卡号临时表 总行数 */
  readonly cardCodeTempCount?: Maybe<Scalars["Int"]>;
  /** 卡号临时表 分页查询 */
  readonly cardCodeTempList?: Maybe<CardCodeTempList>;
  /** 社区发言表  id 获取 */
  readonly commentBoard?: Maybe<CommentBoard>;
  /** 社区发言表 有条件返回 */
  readonly commentBoardAll?: Maybe<ReadonlyArray<Maybe<CommentBoard>>>;
  /** 社区发言表 总行数 */
  readonly commentBoardCount?: Maybe<Scalars["Int"]>;
  /** 社区发言表 分页查询 */
  readonly commentBoardList?: Maybe<CommentBoardList>;
  /** 社区发言操作日志  id 获取 */
  readonly commentBoardLog?: Maybe<CommentBoardLog>;
  /** 社区发言操作日志 有条件返回 */
  readonly commentBoardLogAll?: Maybe<ReadonlyArray<Maybe<CommentBoardLog>>>;
  /** 社区发言操作日志 总行数 */
  readonly commentBoardLogCount?: Maybe<Scalars["Int"]>;
  /** 社区发言操作日志 分页查询 */
  readonly commentBoardLogList?: Maybe<CommentBoardLogList>;
  /** 社区发言参与人数统计  id 获取 */
  readonly commentBoardStat?: Maybe<CommentBoardStat>;
  /** 社区发言参与人数统计 有条件返回 */
  readonly commentBoardStatAll?: Maybe<ReadonlyArray<Maybe<CommentBoardStat>>>;
  /** 社区发言参与人数统计 总行数 */
  readonly commentBoardStatCount?: Maybe<Scalars["Int"]>;
  /** 社区发言参与人数统计 分页查询 */
  readonly commentBoardStatList?: Maybe<CommentBoardStatList>;
  /** 社区发言投票详情  id 获取 */
  readonly commentBoardVote?: Maybe<CommentBoardVote>;
  /** 社区发言投票详情 有条件返回 */
  readonly commentBoardVoteAll?: Maybe<ReadonlyArray<Maybe<CommentBoardVote>>>;
  /** 社区发言投票详情 总行数 */
  readonly commentBoardVoteCount?: Maybe<Scalars["Int"]>;
  /** 社区发言投票详情 分页查询 */
  readonly commentBoardVoteList?: Maybe<CommentBoardVoteList>;
  /** 社区发言投票奖励  id 获取 */
  readonly commentBoardVoteScore?: Maybe<CommentBoardVoteScore>;
  /** 社区发言投票奖励 有条件返回 */
  readonly commentBoardVoteScoreAll?: Maybe<
    ReadonlyArray<Maybe<CommentBoardVoteScore>>
  >;
  /** 社区发言投票奖励 总行数 */
  readonly commentBoardVoteScoreCount?: Maybe<Scalars["Int"]>;
  /** 社区发言投票奖励 分页查询 */
  readonly commentBoardVoteScoreList?: Maybe<CommentBoardVoteScoreList>;
  /** 社区发言板块管理  id 获取 */
  readonly commentClassify?: Maybe<CommentClassify>;
  /** 社区发言板块管理 有条件返回 */
  readonly commentClassifyAll?: Maybe<ReadonlyArray<Maybe<CommentClassify>>>;
  /** 社区发言板块管理 总行数 */
  readonly commentClassifyCount?: Maybe<Scalars["Int"]>;
  /** 社区发言板块管理 分页查询 */
  readonly commentClassifyList?: Maybe<CommentClassifyList>;
  /** 社区发言图片表  id 获取 */
  readonly commentImage?: Maybe<CommentImage>;
  /** 社区发言图片表 有条件返回 */
  readonly commentImageAll?: Maybe<ReadonlyArray<Maybe<CommentImage>>>;
  /** 社区发言图片表 总行数 */
  readonly commentImageCount?: Maybe<Scalars["Int"]>;
  /** 社区发言图片表 分页查询 */
  readonly commentImageList?: Maybe<CommentImageList>;
  /** 社区发言板块奖励阶段  id 获取 */
  readonly commentScoreLevel?: Maybe<CommentScoreLevel>;
  /** 社区发言板块奖励阶段 有条件返回 */
  readonly commentScoreLevelAll?: Maybe<
    ReadonlyArray<Maybe<CommentScoreLevel>>
  >;
  /** 社区发言板块奖励阶段 总行数 */
  readonly commentScoreLevelCount?: Maybe<Scalars["Int"]>;
  /** 社区发言板块奖励阶段 分页查询 */
  readonly commentScoreLevelList?: Maybe<CommentScoreLevelList>;
  /** 社区点亮值  id 获取 */
  readonly communityUpvote?: Maybe<CommunityUpvote>;
  /** 社区点亮值兑换记录  id 获取 */
  readonly communityUpvoteActivity?: Maybe<CommunityUpvoteActivity>;
  /** 社区点亮值兑换记录 有条件返回 */
  readonly communityUpvoteActivityAll?: Maybe<
    ReadonlyArray<Maybe<CommunityUpvoteActivity>>
  >;
  /** 社区点亮值兑换记录 总行数 */
  readonly communityUpvoteActivityCount?: Maybe<Scalars["Int"]>;
  /** 社区点亮值兑换记录 分页查询 */
  readonly communityUpvoteActivityList?: Maybe<CommunityUpvoteActivityList>;
  /** 社区点亮值 有条件返回 */
  readonly communityUpvoteAll?: Maybe<ReadonlyArray<Maybe<CommunityUpvote>>>;
  /** 社区点亮值 总行数 */
  readonly communityUpvoteCount?: Maybe<Scalars["Int"]>;
  /** 社区点亮值 分页查询 */
  readonly communityUpvoteList?: Maybe<CommunityUpvoteList>;
  /** 店铺列表  id 获取 */
  readonly cooperationMerchant?: Maybe<CooperationMerchant>;
  /** 店铺列表 有条件返回 */
  readonly cooperationMerchantAll?: Maybe<
    ReadonlyArray<Maybe<CooperationMerchant>>
  >;
  /** 店铺列表 总行数 */
  readonly cooperationMerchantCount?: Maybe<Scalars["Int"]>;
  /** 门店券  id 获取 */
  readonly cooperationMerchantCoupon?: Maybe<CooperationMerchantCoupon>;
  /** 门店券 有条件返回 */
  readonly cooperationMerchantCouponAll?: Maybe<
    ReadonlyArray<Maybe<CooperationMerchantCoupon>>
  >;
  /** 门店券 总行数 */
  readonly cooperationMerchantCouponCount?: Maybe<Scalars["Int"]>;
  /** 门店券 分页查询 */
  readonly cooperationMerchantCouponList?: Maybe<CooperationMerchantCouponList>;
  /** 店铺列表 分页查询 */
  readonly cooperationMerchantList?: Maybe<CooperationMerchantList>;
  /** 门店券-优惠套餐-发放  id 获取 */
  readonly couponGrantComboSale?: Maybe<CouponGrantComboSale>;
  /** 门店券-优惠套餐-发放 有条件返回 */
  readonly couponGrantComboSaleAll?: Maybe<
    ReadonlyArray<Maybe<CouponGrantComboSale>>
  >;
  /** 门店券-优惠套餐-发放 总行数 */
  readonly couponGrantComboSaleCount?: Maybe<Scalars["Int"]>;
  /** 门店券-优惠套餐-发放 分页查询 */
  readonly couponGrantComboSaleList?: Maybe<CouponGrantComboSaleList>;
  /** 门店券-通兑券-发放  id 获取 */
  readonly couponGrantExchange?: Maybe<CouponGrantExchange>;
  /** 门店券-通兑券-发放 有条件返回 */
  readonly couponGrantExchangeAll?: Maybe<
    ReadonlyArray<Maybe<CouponGrantExchange>>
  >;
  /** 门店券-通兑券-发放 总行数 */
  readonly couponGrantExchangeCount?: Maybe<Scalars["Int"]>;
  /** 门店券-通兑券-发放 分页查询 */
  readonly couponGrantExchangeList?: Maybe<CouponGrantExchangeList>;
  /** 门店券-满减券-发放  id 获取 */
  readonly couponGrantSpecialOffers?: Maybe<CouponGrantSpecialOffers>;
  /** 门店券-满减券-发放 有条件返回 */
  readonly couponGrantSpecialOffersAll?: Maybe<
    ReadonlyArray<Maybe<CouponGrantSpecialOffers>>
  >;
  /** 门店券-满减券-发放 总行数 */
  readonly couponGrantSpecialOffersCount?: Maybe<Scalars["Int"]>;
  /** 门店券-满减券-发放 分页查询 */
  readonly couponGrantSpecialOffersList?: Maybe<CouponGrantSpecialOffersList>;
  /** 门店券订单列表  id 获取 */
  readonly couponOrder?: Maybe<CouponOrder>;
  /** 门店券订单列表 有条件返回 */
  readonly couponOrderAll?: Maybe<ReadonlyArray<Maybe<CouponOrder>>>;
  /** 门店券订单列表 总行数 */
  readonly couponOrderCount?: Maybe<Scalars["Int"]>;
  /** 门店券订单列表 分页查询 */
  readonly couponOrderList?: Maybe<CouponOrderList>;
  /** 门店券订单日志  id 获取 */
  readonly couponOrderLog?: Maybe<CouponOrderLog>;
  /** 门店券订单日志 有条件返回 */
  readonly couponOrderLogAll?: Maybe<ReadonlyArray<Maybe<CouponOrderLog>>>;
  /** 门店券订单日志 总行数 */
  readonly couponOrderLogCount?: Maybe<Scalars["Int"]>;
  /** 门店券订单日志 分页查询 */
  readonly couponOrderLogList?: Maybe<CouponOrderLogList>;
  /** 门店券-优惠套餐  id 获取 */
  readonly couponQrcodeComboSale?: Maybe<CouponQrcodeComboSale>;
  /** 门店券-优惠套餐 有条件返回 */
  readonly couponQrcodeComboSaleAll?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeComboSale>>
  >;
  /** 门店券-优惠套餐 总行数 */
  readonly couponQrcodeComboSaleCount?: Maybe<Scalars["Int"]>;
  /** 门店券-优惠套餐 分页查询 */
  readonly couponQrcodeComboSaleList?: Maybe<CouponQrcodeComboSaleList>;
  /** 门店券-通兑券  id 获取 */
  readonly couponQrcodeExchange?: Maybe<CouponQrcodeExchange>;
  /** 门店券-通兑券 有条件返回 */
  readonly couponQrcodeExchangeAll?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeExchange>>
  >;
  /** 门店券-通兑券 总行数 */
  readonly couponQrcodeExchangeCount?: Maybe<Scalars["Int"]>;
  /** 门店券-通兑券 分页查询 */
  readonly couponQrcodeExchangeList?: Maybe<CouponQrcodeExchangeList>;
  /** 门店券-满减券  id 获取 */
  readonly couponQrcodeSpecialOffers?: Maybe<CouponQrcodeSpecialOffers>;
  /** 门店券-满减券 有条件返回 */
  readonly couponQrcodeSpecialOffersAll?: Maybe<
    ReadonlyArray<Maybe<CouponQrcodeSpecialOffers>>
  >;
  /** 门店券-满减券 总行数 */
  readonly couponQrcodeSpecialOffersCount?: Maybe<Scalars["Int"]>;
  /** 门店券-满减券 分页查询 */
  readonly couponQrcodeSpecialOffersList?: Maybe<CouponQrcodeSpecialOffersList>;
  /** 货币兑换比率  id 获取 */
  readonly currencyExchangeRate?: Maybe<CurrencyExchangeRate>;
  /** 货币兑换比率 有条件返回 */
  readonly currencyExchangeRateAll?: Maybe<
    ReadonlyArray<Maybe<CurrencyExchangeRate>>
  >;
  /** 货币兑换比率 总行数 */
  readonly currencyExchangeRateCount?: Maybe<Scalars["Int"]>;
  /** 货币兑换比率 分页查询 */
  readonly currencyExchangeRateList?: Maybe<CurrencyExchangeRateList>;
  /** 系统设置字典库  id 获取 */
  readonly dataDictionarySystem?: Maybe<DataDictionarySystem>;
  /** 系统设置字典库 有条件返回 */
  readonly dataDictionarySystemAll?: Maybe<
    ReadonlyArray<Maybe<DataDictionarySystem>>
  >;
  /** 系统设置字典库 总行数 */
  readonly dataDictionarySystemCount?: Maybe<Scalars["Int"]>;
  /** 系统设置字典库 分页查询 */
  readonly dataDictionarySystemList?: Maybe<DataDictionarySystemList>;
  /** 南水工程demo  id 获取 */
  readonly demoWater?: Maybe<DemoWater>;
  /** 南水工程demo 有条件返回 */
  readonly demoWaterAll?: Maybe<ReadonlyArray<Maybe<DemoWater>>>;
  /** 南水工程demo 总行数 */
  readonly demoWaterCount?: Maybe<Scalars["Int"]>;
  /** 南水工程demo 分页查询 */
  readonly demoWaterList?: Maybe<DemoWaterList>;
  /** 公众号关注用户号  id 获取 */
  readonly emsCnplAttention?: Maybe<EmsCnplAttention>;
  /** 公众号关注用户号 有条件返回 */
  readonly emsCnplAttentionAll?: Maybe<ReadonlyArray<Maybe<EmsCnplAttention>>>;
  /** 公众号关注用户号 总行数 */
  readonly emsCnplAttentionCount?: Maybe<Scalars["Int"]>;
  /** 公众号关注用户号 分页查询 */
  readonly emsCnplAttentionList?: Maybe<EmsCnplAttentionList>;
  /** 文件上传记录表  id 获取 */
  readonly file?: Maybe<File>;
  /** 文件上传记录表 有条件返回 */
  readonly fileAll?: Maybe<ReadonlyArray<Maybe<File>>>;
  /** 文件上传记录表 总行数 */
  readonly fileCount?: Maybe<Scalars["Int"]>;
  /** 文件上传记录表 分页查询 */
  readonly fileList?: Maybe<FileList>;
  /**
   * findAll聚合
   * {
   *   findAll(modelName:"groupShoppingGoods"
   *     options:{
   *       group: ["shoppingGoodsId"]
   *       attributes: ["SUM:stock:asstock","shoppingGoodsId"]
   *       where:{
   *         shoppingGoodsId:["1279887367812939779","1279887367817134080"]
   *       }
   *     }
   *   )
   * }
   */
  readonly findAll?: Maybe<ReadonlyArray<Maybe<Scalars["JSONObject"]>>>;
  /** 备注  id 获取 */
  readonly frontEndCache?: Maybe<FrontEndCache>;
  /** 备注 有条件返回 */
  readonly frontEndCacheAll?: Maybe<ReadonlyArray<Maybe<FrontEndCache>>>;
  /** 备注 总行数 */
  readonly frontEndCacheCount?: Maybe<Scalars["Int"]>;
  /** 备注 分页查询 */
  readonly frontEndCacheList?: Maybe<FrontEndCacheList>;
  /** 绿景积分记录表  id 获取 */
  readonly greenViewPoints?: Maybe<GreenViewPoints>;
  /** 绿景积分记录表 有条件返回 */
  readonly greenViewPointsAll?: Maybe<ReadonlyArray<Maybe<GreenViewPoints>>>;
  /** 绿景积分记录表 总行数 */
  readonly greenViewPointsCount?: Maybe<Scalars["Int"]>;
  /** 绿景积分记录表 分页查询 */
  readonly greenViewPointsList?: Maybe<GreenViewPointsList>;
  /** 商品包  id 获取 */
  readonly groupShoppingGoods?: Maybe<GroupShoppingGoods>;
  /** 商品包 有条件返回 */
  readonly groupShoppingGoodsAll?: Maybe<
    ReadonlyArray<Maybe<GroupShoppingGoods>>
  >;
  /** 商品包 总行数 */
  readonly groupShoppingGoodsCount?: Maybe<Scalars["Int"]>;
  /** 商品包 分页查询 */
  readonly groupShoppingGoodsList?: Maybe<GroupShoppingGoodsList>;
  /** 商品包采购入库单  id 获取 */
  readonly groupShoppingGoodsOrder?: Maybe<GroupShoppingGoodsOrder>;
  /** 商品包采购入库单 有条件返回 */
  readonly groupShoppingGoodsOrderAll?: Maybe<
    ReadonlyArray<Maybe<GroupShoppingGoodsOrder>>
  >;
  /** 商品包采购入库单 总行数 */
  readonly groupShoppingGoodsOrderCount?: Maybe<Scalars["Int"]>;
  /** 商品包采购入库单 分页查询 */
  readonly groupShoppingGoodsOrderList?: Maybe<GroupShoppingGoodsOrderList>;
  /** 首页入口配置详情  id 获取 */
  readonly homePageDetails?: Maybe<HomePageDetails>;
  /** 首页入口配置详情 有条件返回 */
  readonly homePageDetailsAll?: Maybe<ReadonlyArray<Maybe<HomePageDetails>>>;
  /** 首页入口配置详情 总行数 */
  readonly homePageDetailsCount?: Maybe<Scalars["Int"]>;
  /** 首页入口配置详情 分页查询 */
  readonly homePageDetailsList?: Maybe<HomePageDetailsList>;
  /** 首页入口配置  id 获取 */
  readonly homePageSystem?: Maybe<HomePageSystem>;
  /** 首页入口配置 有条件返回 */
  readonly homePageSystemAll?: Maybe<ReadonlyArray<Maybe<HomePageSystem>>>;
  /** 首页入口配置 总行数 */
  readonly homePageSystemCount?: Maybe<Scalars["Int"]>;
  /** 首页入口配置图片  id 获取 */
  readonly homePageSystemImage?: Maybe<HomePageSystemImage>;
  /** 首页入口配置图片 有条件返回 */
  readonly homePageSystemImageAll?: Maybe<
    ReadonlyArray<Maybe<HomePageSystemImage>>
  >;
  /** 首页入口配置图片 总行数 */
  readonly homePageSystemImageCount?: Maybe<Scalars["Int"]>;
  /** 首页入口配置图片 分页查询 */
  readonly homePageSystemImageList?: Maybe<HomePageSystemImageList>;
  /** 首页入口配置 分页查询 */
  readonly homePageSystemList?: Maybe<HomePageSystemList>;
  /** 任务奖励设置表  id 获取 */
  readonly incentiveValue?: Maybe<IncentiveValue>;
  /** 任务奖励设置表 有条件返回 */
  readonly incentiveValueAll?: Maybe<ReadonlyArray<Maybe<IncentiveValue>>>;
  /** 任务奖励设置表 总行数 */
  readonly incentiveValueCount?: Maybe<Scalars["Int"]>;
  /** 任务奖励设置表 分页查询 */
  readonly incentiveValueList?: Maybe<IncentiveValueList>;
  /** 居民卡积分关联表  id 获取 */
  readonly inhabitantPointsRelation?: Maybe<InhabitantPointsRelation>;
  /** 居民卡积分关联表 有条件返回 */
  readonly inhabitantPointsRelationAll?: Maybe<
    ReadonlyArray<Maybe<InhabitantPointsRelation>>
  >;
  /** 居民卡积分关联表 总行数 */
  readonly inhabitantPointsRelationCount?: Maybe<Scalars["Int"]>;
  /** 居民卡积分关联表 分页查询 */
  readonly inhabitantPointsRelationList?: Maybe<InhabitantPointsRelationList>;
  /** 居民卡积分发放记录  id 获取 */
  readonly inhabitantPointsRewardDetails?: Maybe<InhabitantPointsRewardDetails>;
  /** 居民卡积分发放记录 有条件返回 */
  readonly inhabitantPointsRewardDetailsAll?: Maybe<
    ReadonlyArray<Maybe<InhabitantPointsRewardDetails>>
  >;
  /** 居民卡积分发放记录 总行数 */
  readonly inhabitantPointsRewardDetailsCount?: Maybe<Scalars["Int"]>;
  /** 居民卡积分发放记录 分页查询 */
  readonly inhabitantPointsRewardDetailsList?: Maybe<InhabitantPointsRewardDetailsList>;
  /** 京东接口请求日志  id 获取 */
  readonly jdongApiLogs?: Maybe<JdongApiLogs>;
  /** 京东接口请求日志 有条件返回 */
  readonly jdongApiLogsAll?: Maybe<ReadonlyArray<Maybe<JdongApiLogs>>>;
  /** 京东接口请求日志 总行数 */
  readonly jdongApiLogsCount?: Maybe<Scalars["Int"]>;
  /** 京东接口请求日志 分页查询 */
  readonly jdongApiLogsList?: Maybe<JdongApiLogsList>;
  /** 京东用户绑定记录  id 获取 */
  readonly jdongTrackingOrder?: Maybe<JdongTrackingOrder>;
  /** 京东用户绑定记录 有条件返回 */
  readonly jdongTrackingOrderAll?: Maybe<
    ReadonlyArray<Maybe<JdongTrackingOrder>>
  >;
  /** 京东用户绑定记录 总行数 */
  readonly jdongTrackingOrderCount?: Maybe<Scalars["Int"]>;
  /** 京东用户绑定记录 分页查询 */
  readonly jdongTrackingOrderList?: Maybe<JdongTrackingOrderList>;
  /** 京东用户绑定记录  id 获取 */
  readonly jdongUserBuilding?: Maybe<JdongUserBuilding>;
  /** 京东用户绑定记录 有条件返回 */
  readonly jdongUserBuildingAll?: Maybe<
    ReadonlyArray<Maybe<JdongUserBuilding>>
  >;
  /** 京东用户绑定记录 总行数 */
  readonly jdongUserBuildingCount?: Maybe<Scalars["Int"]>;
  /** 京东用户绑定记录 分页查询 */
  readonly jdongUserBuildingList?: Maybe<JdongUserBuildingList>;
  /** 最后登录记录表  id 获取 */
  readonly loginLasttime?: Maybe<LoginLasttime>;
  /** 最后登录记录表 有条件返回 */
  readonly loginLasttimeAll?: Maybe<ReadonlyArray<Maybe<LoginLasttime>>>;
  /** 最后登录记录表 总行数 */
  readonly loginLasttimeCount?: Maybe<Scalars["Int"]>;
  /** 最后登录记录表 分页查询 */
  readonly loginLasttimeList?: Maybe<LoginLasttimeList>;
  /** 登录记录表  id 获取 */
  readonly loginRecord?: Maybe<LoginRecord>;
  /** 登录记录表 有条件返回 */
  readonly loginRecordAll?: Maybe<ReadonlyArray<Maybe<LoginRecord>>>;
  /** 登录记录表 总行数 */
  readonly loginRecordCount?: Maybe<Scalars["Int"]>;
  /** 登录记录表 分页查询 */
  readonly loginRecordList?: Maybe<LoginRecordList>;
  /** 抽奖活动表  id 获取 */
  readonly lotteryDrawActivity?: Maybe<LotteryDrawActivity>;
  /** 抽奖活动表 有条件返回 */
  readonly lotteryDrawActivityAll?: Maybe<
    ReadonlyArray<Maybe<LotteryDrawActivity>>
  >;
  /** 抽奖活动表 总行数 */
  readonly lotteryDrawActivityCount?: Maybe<Scalars["Int"]>;
  /** 抽奖活动表 分页查询 */
  readonly lotteryDrawActivityList?: Maybe<LotteryDrawActivityList>;
  /** 用户抽奖记录表  id 获取 */
  readonly lotteryDrawRecord?: Maybe<LotteryDrawRecord>;
  /** 用户抽奖记录表 有条件返回 */
  readonly lotteryDrawRecordAll?: Maybe<
    ReadonlyArray<Maybe<LotteryDrawRecord>>
  >;
  /** 用户抽奖记录表 总行数 */
  readonly lotteryDrawRecordCount?: Maybe<Scalars["Int"]>;
  /** 用户抽奖记录表 分页查询 */
  readonly lotteryDrawRecordList?: Maybe<LotteryDrawRecordList>;
  /** 锦鲤活动报名记录  id 获取 */
  readonly luckyStarWishes?: Maybe<LuckyStarWishes>;
  /** 锦鲤活动报名记录 有条件返回 */
  readonly luckyStarWishesAll?: Maybe<ReadonlyArray<Maybe<LuckyStarWishes>>>;
  /** 锦鲤活动报名记录 总行数 */
  readonly luckyStarWishesCount?: Maybe<Scalars["Int"]>;
  /** 锦鲤活动报名记录 分页查询 */
  readonly luckyStarWishesList?: Maybe<LuckyStarWishesList>;
  /** 邮寄地址  id 获取 */
  readonly mailAddress?: Maybe<MailAddress>;
  /** 邮寄地址 有条件返回 */
  readonly mailAddressAll?: Maybe<ReadonlyArray<Maybe<MailAddress>>>;
  /** 邮寄地址 总行数 */
  readonly mailAddressCount?: Maybe<Scalars["Int"]>;
  /** 邮寄地址 分页查询 */
  readonly mailAddressList?: Maybe<MailAddressList>;
  /** 地图坐标点  id 获取 */
  readonly mapPoint?: Maybe<MapPoint>;
  /** 地图坐标点 有条件返回 */
  readonly mapPointAll?: Maybe<ReadonlyArray<Maybe<MapPoint>>>;
  /** 地图坐标点 总行数 */
  readonly mapPointCount?: Maybe<Scalars["Int"]>;
  /** 地图坐标点 分页查询 */
  readonly mapPointList?: Maybe<MapPointList>;
  /** mq任务表  id 获取 */
  readonly messageQueueJobs?: Maybe<MessageQueueJobs>;
  /** mq任务表 有条件返回 */
  readonly messageQueueJobsAll?: Maybe<ReadonlyArray<Maybe<MessageQueueJobs>>>;
  /** mq任务表 总行数 */
  readonly messageQueueJobsCount?: Maybe<Scalars["Int"]>;
  /** mq任务表 分页查询 */
  readonly messageQueueJobsList?: Maybe<MessageQueueJobsList>;
  /** 小程序角色权限表  id 获取 */
  readonly power?: Maybe<Power>;
  /** 小程序角色权限表 有条件返回 */
  readonly powerAll?: Maybe<ReadonlyArray<Maybe<Power>>>;
  /** 小程序角色权限表 总行数 */
  readonly powerCount?: Maybe<Scalars["Int"]>;
  /** 小程序角色权限表 分页查询 */
  readonly powerList?: Maybe<PowerList>;
  /** 用户答题记录  id 获取 */
  readonly questionAnswerRecord?: Maybe<QuestionAnswerRecord>;
  /** 用户答题记录 有条件返回 */
  readonly questionAnswerRecordAll?: Maybe<
    ReadonlyArray<Maybe<QuestionAnswerRecord>>
  >;
  /** 用户答题记录 总行数 */
  readonly questionAnswerRecordCount?: Maybe<Scalars["Int"]>;
  /** 用户答题记录 分页查询 */
  readonly questionAnswerRecordList?: Maybe<QuestionAnswerRecordList>;
  /** 活动题库  id 获取 */
  readonly questionBank?: Maybe<QuestionBank>;
  /** 活动题库 有条件返回 */
  readonly questionBankAll?: Maybe<ReadonlyArray<Maybe<QuestionBank>>>;
  /** 活动题库 总行数 */
  readonly questionBankCount?: Maybe<Scalars["Int"]>;
  /** 活动题库 分页查询 */
  readonly questionBankList?: Maybe<QuestionBankList>;
  /** 题库随机抽题 */
  readonly questionBankRandom?: Maybe<ReadonlyArray<Maybe<QuestionBank>>>;
  /** 调查问卷列表  id 获取 */
  readonly questionnaire?: Maybe<Questionnaire>;
  /** 调查问卷列表 有条件返回 */
  readonly questionnaireAll?: Maybe<ReadonlyArray<Maybe<Questionnaire>>>;
  /** 调查问卷列表 总行数 */
  readonly questionnaireCount?: Maybe<Scalars["Int"]>;
  /** 调查问卷列表 分页查询 */
  readonly questionnaireList?: Maybe<QuestionnaireList>;
  /** 调查问卷列表  id 获取 */
  readonly questionnaireLocation?: Maybe<QuestionnaireLocation>;
  /** 调查问卷列表 有条件返回 */
  readonly questionnaireLocationAll?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireLocation>>
  >;
  /** 调查问卷列表 总行数 */
  readonly questionnaireLocationCount?: Maybe<Scalars["Int"]>;
  /** 调查问卷列表 分页查询 */
  readonly questionnaireLocationList?: Maybe<QuestionnaireLocationList>;
  /** 调查问卷选项表  id 获取 */
  readonly questionnaireOptions?: Maybe<QuestionnaireOptions>;
  /** 调查问卷选项表 有条件返回 */
  readonly questionnaireOptionsAll?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireOptions>>
  >;
  /** 调查问卷选项表 总行数 */
  readonly questionnaireOptionsCount?: Maybe<Scalars["Int"]>;
  /** 调查问卷选项表 分页查询 */
  readonly questionnaireOptionsList?: Maybe<QuestionnaireOptionsList>;
  /** 调查问卷问题表  id 获取 */
  readonly questionnaireQuestion?: Maybe<QuestionnaireQuestion>;
  /** 调查问卷问题表 有条件返回 */
  readonly questionnaireQuestionAll?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireQuestion>>
  >;
  /** 调查问卷问题表 总行数 */
  readonly questionnaireQuestionCount?: Maybe<Scalars["Int"]>;
  /** 调查问卷问题表 分页查询 */
  readonly questionnaireQuestionList?: Maybe<QuestionnaireQuestionList>;
  /** 调查问卷用户应答记录  id 获取 */
  readonly questionnaireUserAnswer?: Maybe<QuestionnaireUserAnswer>;
  /** 调查问卷用户应答记录 有条件返回 */
  readonly questionnaireUserAnswerAll?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireUserAnswer>>
  >;
  /** 调查问卷用户应答记录 总行数 */
  readonly questionnaireUserAnswerCount?: Maybe<Scalars["Int"]>;
  /** 调查问卷用户应答记录 分页查询 */
  readonly questionnaireUserAnswerList?: Maybe<QuestionnaireUserAnswerList>;
  /** 调查问卷记录  id 获取 */
  readonly questionnaireUserRecord?: Maybe<QuestionnaireUserRecord>;
  /** 调查问卷记录 有条件返回 */
  readonly questionnaireUserRecordAll?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireUserRecord>>
  >;
  /** 调查问卷记录 总行数 */
  readonly questionnaireUserRecordCount?: Maybe<Scalars["Int"]>;
  /** 调查问卷记录 分页查询 */
  readonly questionnaireUserRecordList?: Maybe<QuestionnaireUserRecordList>;
  /** 报表存储  id 获取 */
  readonly report?: Maybe<Report>;
  /** 报表存储 有条件返回 */
  readonly reportAll?: Maybe<ReadonlyArray<Maybe<Report>>>;
  /** 报表存储 总行数 */
  readonly reportCount?: Maybe<Scalars["Int"]>;
  /** 报表存储 分页查询 */
  readonly reportList?: Maybe<ReportList>;
  /** 服务器时间 */
  readonly serverInfo?: Maybe<ServerInfo>;
  /** 石分社区-居民卡日志  id 获取 */
  readonly shifenCommunityCardLogs?: Maybe<ShifenCommunityCardLogs>;
  /** 石分社区-居民卡日志 有条件返回 */
  readonly shifenCommunityCardLogsAll?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityCardLogs>>
  >;
  /** 石分社区-居民卡日志 总行数 */
  readonly shifenCommunityCardLogsCount?: Maybe<Scalars["Int"]>;
  /** 石分社区-居民卡日志 分页查询 */
  readonly shifenCommunityCardLogsList?: Maybe<ShifenCommunityCardLogsList>;
  /** 石分社区-居民卡  id 获取 */
  readonly shifenCommunityInhabitantCard?: Maybe<ShifenCommunityInhabitantCard>;
  /** 石分社区-居民卡 有条件返回 */
  readonly shifenCommunityInhabitantCardAll?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityInhabitantCard>>
  >;
  /** 石分社区-居民卡 总行数 */
  readonly shifenCommunityInhabitantCardCount?: Maybe<Scalars["Int"]>;
  /** 石分社区-居民卡 分页查询 */
  readonly shifenCommunityInhabitantCardList?: Maybe<ShifenCommunityInhabitantCardList>;
  /** 石分社区-居民卡积分变更记录  id 获取 */
  readonly shifenCommunityInhabitantPoints?: Maybe<ShifenCommunityInhabitantPoints>;
  /** 石分社区-居民卡积分变更记录 有条件返回 */
  readonly shifenCommunityInhabitantPointsAll?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityInhabitantPoints>>
  >;
  /** 石分社区-居民卡积分变更记录 总行数 */
  readonly shifenCommunityInhabitantPointsCount?: Maybe<Scalars["Int"]>;
  /** 石分社区-居民卡积分变更记录 分页查询 */
  readonly shifenCommunityInhabitantPointsList?: Maybe<ShifenCommunityInhabitantPointsList>;
  /** 石分社区-用户积分转移记录中间表  id 获取 */
  readonly shifenCommunityInhabitantTransfer?: Maybe<ShifenCommunityInhabitantTransfer>;
  /** 石分社区-用户积分转移记录中间表 有条件返回 */
  readonly shifenCommunityInhabitantTransferAll?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityInhabitantTransfer>>
  >;
  /** 石分社区-用户积分转移记录中间表 总行数 */
  readonly shifenCommunityInhabitantTransferCount?: Maybe<Scalars["Int"]>;
  /** 石分社区-用户积分转移记录中间表 分页查询 */
  readonly shifenCommunityInhabitantTransferList?: Maybe<ShifenCommunityInhabitantTransferList>;
  /** 石分社区-积分变更记录  id 获取 */
  readonly shifenCommunityPoints?: Maybe<ShifenCommunityPoints>;
  /** 石分社区-积分变更记录 有条件返回 */
  readonly shifenCommunityPointsAll?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityPoints>>
  >;
  /** 石分社区-积分变更记录 总行数 */
  readonly shifenCommunityPointsCount?: Maybe<Scalars["Int"]>;
  /** 石分社区-用户积分变更记录  id 获取 */
  readonly shifenCommunityPointsImage?: Maybe<ShifenCommunityPointsImage>;
  /** 石分社区-用户积分变更记录 有条件返回 */
  readonly shifenCommunityPointsImageAll?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityPointsImage>>
  >;
  /** 石分社区-用户积分变更记录 总行数 */
  readonly shifenCommunityPointsImageCount?: Maybe<Scalars["Int"]>;
  /** 石分社区-用户积分变更记录 分页查询 */
  readonly shifenCommunityPointsImageList?: Maybe<ShifenCommunityPointsImageList>;
  /** 石分社区-积分变更记录 分页查询 */
  readonly shifenCommunityPointsList?: Maybe<ShifenCommunityPointsList>;
  /** 商城商品  id 获取 */
  readonly shoppingGoods?: Maybe<ShoppingGoods>;
  /** 商城商品 有条件返回 */
  readonly shoppingGoodsAll?: Maybe<ReadonlyArray<Maybe<ShoppingGoods>>>;
  /** 商城商品 总行数 */
  readonly shoppingGoodsCount?: Maybe<Scalars["Int"]>;
  /** 商城-商品-图片  id 获取 */
  readonly shoppingGoodsImage?: Maybe<ShoppingGoodsImage>;
  /** 商城-商品-图片 有条件返回 */
  readonly shoppingGoodsImageAll?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoodsImage>>
  >;
  /** 商城-商品-图片 总行数 */
  readonly shoppingGoodsImageCount?: Maybe<Scalars["Int"]>;
  /** 商城-商品-图片 分页查询 */
  readonly shoppingGoodsImageList?: Maybe<ShoppingGoodsImageList>;
  /** 商城商品 分页查询 */
  readonly shoppingGoodsList?: Maybe<ShoppingGoodsList>;
  /** 商城商品库存变化记录表  id 获取 */
  readonly shoppingGoodsStock?: Maybe<ShoppingGoodsStock>;
  /** 商城商品库存变化记录表 有条件返回 */
  readonly shoppingGoodsStockAll?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoodsStock>>
  >;
  /** 商城商品库存变化记录表 总行数 */
  readonly shoppingGoodsStockCount?: Maybe<Scalars["Int"]>;
  /** 商城商品库存变化记录表 分页查询 */
  readonly shoppingGoodsStockList?: Maybe<ShoppingGoodsStockList>;
  /** shouhuojiyun订单支付 */
  readonly shouhuojiyunOrder?: Maybe<ShouhuojiyunOrderOut>;
  /** 货柜自动订单积分扣减  id 获取 */
  readonly shouhuojiyunPoints?: Maybe<ShouhuojiyunPoints>;
  /** 货柜自动订单积分扣减 有条件返回 */
  readonly shouhuojiyunPointsAll?: Maybe<
    ReadonlyArray<Maybe<ShouhuojiyunPoints>>
  >;
  /** 货柜自动订单积分扣减 总行数 */
  readonly shouhuojiyunPointsCount?: Maybe<Scalars["Int"]>;
  /** 货柜自动订单积分扣减 分页查询 */
  readonly shouhuojiyunPointsList?: Maybe<ShouhuojiyunPointsList>;
  /** 签到标签管理(分类知识)  id 获取 */
  readonly signInLabel?: Maybe<SignInLabel>;
  /** 签到标签管理(分类知识) 有条件返回 */
  readonly signInLabelAll?: Maybe<ReadonlyArray<Maybe<SignInLabel>>>;
  /** 签到标签管理(分类知识) 总行数 */
  readonly signInLabelCount?: Maybe<Scalars["Int"]>;
  /** 签到标签管理(分类知识) 分页查询 */
  readonly signInLabelList?: Maybe<SignInLabelList>;
  /** 签到记录表  id 获取 */
  readonly signInRecord?: Maybe<SignInRecord>;
  /** 签到记录表 有条件返回 */
  readonly signInRecordAll?: Maybe<ReadonlyArray<Maybe<SignInRecord>>>;
  /** 签到记录表 总行数 */
  readonly signInRecordCount?: Maybe<Scalars["Int"]>;
  /** 签到记录表 分页查询 */
  readonly signInRecordList?: Maybe<SignInRecordList>;
  /** 签到分享记录  id 获取 */
  readonly signInShared?: Maybe<SignInShared>;
  /** 签到分享记录 有条件返回 */
  readonly signInSharedAll?: Maybe<ReadonlyArray<Maybe<SignInShared>>>;
  /** 签到分享记录 总行数 */
  readonly signInSharedCount?: Maybe<Scalars["Int"]>;
  /** 签到分享记录 分页查询 */
  readonly signInSharedList?: Maybe<SignInSharedList>;
  /** 短信  id 获取 */
  readonly sms?: Maybe<Sms>;
  /** 短信 有条件返回 */
  readonly smsAll?: Maybe<ReadonlyArray<Maybe<Sms>>>;
  /** 短信 总行数 */
  readonly smsCount?: Maybe<Scalars["Int"]>;
  /** 短信 分页查询 */
  readonly smsList?: Maybe<SmsList>;
  /** 石分夺宝自动开奖记录  id 获取 */
  readonly snatchLotteryRunLog?: Maybe<SnatchLotteryRunLog>;
  /** 石分夺宝自动开奖记录 有条件返回 */
  readonly snatchLotteryRunLogAll?: Maybe<
    ReadonlyArray<Maybe<SnatchLotteryRunLog>>
  >;
  /** 石分夺宝自动开奖记录 总行数 */
  readonly snatchLotteryRunLogCount?: Maybe<Scalars["Int"]>;
  /** 石分夺宝自动开奖记录 分页查询 */
  readonly snatchLotteryRunLogList?: Maybe<SnatchLotteryRunLogList>;
  /** 石分夺宝数据  id 获取 */
  readonly snatchTreasure?: Maybe<SnatchTreasure>;
  /** 石分夺宝数据 有条件返回 */
  readonly snatchTreasureAll?: Maybe<ReadonlyArray<Maybe<SnatchTreasure>>>;
  /** 石分夺宝数据 总行数 */
  readonly snatchTreasureCount?: Maybe<Scalars["Int"]>;
  /** 石分夺宝数据 分页查询 */
  readonly snatchTreasureList?: Maybe<SnatchTreasureList>;
  /** 石分夺宝奖券数据  id 获取 */
  readonly snatchTreasureRecord?: Maybe<SnatchTreasureRecord>;
  /** 石分夺宝奖券数据 有条件返回 */
  readonly snatchTreasureRecordAll?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureRecord>>
  >;
  /** 石分夺宝奖券数据 总行数 */
  readonly snatchTreasureRecordCount?: Maybe<Scalars["Int"]>;
  /** 石分夺宝奖券数据 分页查询 */
  readonly snatchTreasureRecordList?: Maybe<SnatchTreasureRecordList>;
  /** 石分夺宝奖券数据  id 获取 */
  readonly snatchTreasureShared?: Maybe<SnatchTreasureShared>;
  /** 石分夺宝奖券数据 有条件返回 */
  readonly snatchTreasureSharedAll?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureShared>>
  >;
  /** 石分夺宝奖券数据 总行数 */
  readonly snatchTreasureSharedCount?: Maybe<Scalars["Int"]>;
  /** 石分夺宝奖券数据 分页查询 */
  readonly snatchTreasureSharedList?: Maybe<SnatchTreasureSharedList>;
  /** 夺宝参与统计 */
  readonly snatchTreasureStat?: Maybe<SnatchTreasureStatOut>;
  /** 石分夺宝奖券数据  id 获取 */
  readonly snatchTreasureTicket?: Maybe<SnatchTreasureTicket>;
  /** 石分夺宝奖券数据 有条件返回 */
  readonly snatchTreasureTicketAll?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureTicket>>
  >;
  /** 石分夺宝奖券数据 总行数 */
  readonly snatchTreasureTicketCount?: Maybe<Scalars["Int"]>;
  /** 石分夺宝奖券数据 分页查询 */
  readonly snatchTreasureTicketList?: Maybe<SnatchTreasureTicketList>;
  /** 石分夺宝用户参与记录  id 获取 */
  readonly snatchTreasureUser?: Maybe<SnatchTreasureUser>;
  /** 石分夺宝用户参与记录 有条件返回 */
  readonly snatchTreasureUserAll?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureUser>>
  >;
  /** 石分夺宝用户参与记录 总行数 */
  readonly snatchTreasureUserCount?: Maybe<Scalars["Int"]>;
  /** 石分夺宝用户参与记录 分页查询 */
  readonly snatchTreasureUserList?: Maybe<SnatchTreasureUserList>;
  /** 石分宝账户变更记录  id 获取 */
  readonly stoneAccountRecord?: Maybe<StoneAccountRecord>;
  /** 石分宝账户变更记录 有条件返回 */
  readonly stoneAccountRecordAll?: Maybe<
    ReadonlyArray<Maybe<StoneAccountRecord>>
  >;
  /** 石分宝账户变更记录 总行数 */
  readonly stoneAccountRecordCount?: Maybe<Scalars["Int"]>;
  /** 石分宝账户充值凭证  id 获取 */
  readonly stoneAccountRecordImage?: Maybe<StoneAccountRecordImage>;
  /** 石分宝账户充值凭证 有条件返回 */
  readonly stoneAccountRecordImageAll?: Maybe<
    ReadonlyArray<Maybe<StoneAccountRecordImage>>
  >;
  /** 石分宝账户充值凭证 总行数 */
  readonly stoneAccountRecordImageCount?: Maybe<Scalars["Int"]>;
  /** 石分宝账户充值凭证 分页查询 */
  readonly stoneAccountRecordImageList?: Maybe<StoneAccountRecordImageList>;
  /** 石分宝账户变更记录 分页查询 */
  readonly stoneAccountRecordList?: Maybe<StoneAccountRecordList>;
  /** 石分宝账户对应小区关系表  id 获取 */
  readonly stoneAccountResidential?: Maybe<StoneAccountResidential>;
  /** 石分宝账户对应小区关系表 有条件返回 */
  readonly stoneAccountResidentialAll?: Maybe<
    ReadonlyArray<Maybe<StoneAccountResidential>>
  >;
  /** 石分宝账户对应小区关系表 总行数 */
  readonly stoneAccountResidentialCount?: Maybe<Scalars["Int"]>;
  /** 石分宝账户对应小区关系表 分页查询 */
  readonly stoneAccountResidentialList?: Maybe<StoneAccountResidentialList>;
  /** 石分宝、达人值变更记录  id 获取 */
  readonly stoneScore?: Maybe<StoneScore>;
  /** 石分宝账户  id 获取 */
  readonly stoneScoreAccount?: Maybe<StoneScoreAccount>;
  /** 石分宝账户 有条件返回 */
  readonly stoneScoreAccountAll?: Maybe<
    ReadonlyArray<Maybe<StoneScoreAccount>>
  >;
  /** 石分宝账户 总行数 */
  readonly stoneScoreAccountCount?: Maybe<Scalars["Int"]>;
  /** 石分宝账户 分页查询 */
  readonly stoneScoreAccountList?: Maybe<StoneScoreAccountList>;
  /** 石分宝、达人值变更记录 有条件返回 */
  readonly stoneScoreAll?: Maybe<ReadonlyArray<Maybe<StoneScore>>>;
  /** 石分宝、达人值变更记录 总行数 */
  readonly stoneScoreCount?: Maybe<Scalars["Int"]>;
  /** 石分宝、达人值变更记录 分页查询 */
  readonly stoneScoreList?: Maybe<StoneScoreList>;
  /** 石分宝积分关联表  id 获取 */
  readonly stoneScoreRelation?: Maybe<StoneScoreRelation>;
  /** 石分宝积分关联表 有条件返回 */
  readonly stoneScoreRelationAll?: Maybe<
    ReadonlyArray<Maybe<StoneScoreRelation>>
  >;
  /** 石分宝积分关联表 总行数 */
  readonly stoneScoreRelationCount?: Maybe<Scalars["Int"]>;
  /** 石分宝积分关联表 分页查询 */
  readonly stoneScoreRelationList?: Maybe<StoneScoreRelationList>;
  /** 石分宝发放记录  id 获取 */
  readonly stoneScoreRewardDetails?: Maybe<StoneScoreRewardDetails>;
  /** 石分宝发放记录 有条件返回 */
  readonly stoneScoreRewardDetailsAll?: Maybe<
    ReadonlyArray<Maybe<StoneScoreRewardDetails>>
  >;
  /** 石分宝发放记录 总行数 */
  readonly stoneScoreRewardDetailsCount?: Maybe<Scalars["Int"]>;
  /** 石分宝发放记录 分页查询 */
  readonly stoneScoreRewardDetailsList?: Maybe<StoneScoreRewardDetailsList>;
  /** 用户等级设置  id 获取 */
  readonly stoneTalentLevel?: Maybe<StoneTalentLevel>;
  /** 用户等级设置 有条件返回 */
  readonly stoneTalentLevelAll?: Maybe<ReadonlyArray<Maybe<StoneTalentLevel>>>;
  /** 用户等级设置 总行数 */
  readonly stoneTalentLevelCount?: Maybe<Scalars["Int"]>;
  /** 用户等级奖励说明  id 获取 */
  readonly stoneTalentLevelEntry?: Maybe<StoneTalentLevelEntry>;
  /** 用户等级奖励说明 有条件返回 */
  readonly stoneTalentLevelEntryAll?: Maybe<
    ReadonlyArray<Maybe<StoneTalentLevelEntry>>
  >;
  /** 用户等级奖励说明 总行数 */
  readonly stoneTalentLevelEntryCount?: Maybe<Scalars["Int"]>;
  /** 用户等级奖励说明 分页查询 */
  readonly stoneTalentLevelEntryList?: Maybe<StoneTalentLevelEntryList>;
  /** 用户等级设置 分页查询 */
  readonly stoneTalentLevelList?: Maybe<StoneTalentLevelList>;
  /** 物流信息记录表  id 获取 */
  readonly trackingOrder?: Maybe<TrackingOrder>;
  /** 物流信息记录表 有条件返回 */
  readonly trackingOrderAll?: Maybe<ReadonlyArray<Maybe<TrackingOrder>>>;
  /** 物流信息记录表 总行数 */
  readonly trackingOrderCount?: Maybe<Scalars["Int"]>;
  /** 物流信息记录表 分页查询 */
  readonly trackingOrderList?: Maybe<TrackingOrderList>;
  /** 物流信息记录表  id 获取 */
  readonly trackingOrderLog?: Maybe<TrackingOrderLog>;
  /** 物流信息记录表 有条件返回 */
  readonly trackingOrderLogAll?: Maybe<ReadonlyArray<Maybe<TrackingOrderLog>>>;
  /** 物流信息记录表 总行数 */
  readonly trackingOrderLogCount?: Maybe<Scalars["Int"]>;
  /** 物流信息记录表 分页查询 */
  readonly trackingOrderLogList?: Maybe<TrackingOrderLogList>;
  /** 垃圾桶tcp  id 获取 */
  readonly trashTcp?: Maybe<TrashTcp>;
  /** 垃圾桶tcp 有条件返回 */
  readonly trashTcpAll?: Maybe<ReadonlyArray<Maybe<TrashTcp>>>;
  /** 垃圾桶tcp 总行数 */
  readonly trashTcpCount?: Maybe<Scalars["Int"]>;
  /** 垃圾桶tcp 分页查询 */
  readonly trashTcpList?: Maybe<TrashTcpList>;
  /** 点亮值记录表  id 获取 */
  readonly upvoteRecord?: Maybe<UpvoteRecord>;
  /** 点亮值记录表 有条件返回 */
  readonly upvoteRecordAll?: Maybe<ReadonlyArray<Maybe<UpvoteRecord>>>;
  /** 点亮值记录表 总行数 */
  readonly upvoteRecordCount?: Maybe<Scalars["Int"]>;
  /** 点亮值记录表 分页查询 */
  readonly upvoteRecordList?: Maybe<UpvoteRecordList>;
  /** 小程序角色权限区域  id 获取 */
  readonly userPowerLocation?: Maybe<UserPowerLocation>;
  /** 小程序角色权限区域 有条件返回 */
  readonly userPowerLocationAll?: Maybe<
    ReadonlyArray<Maybe<UserPowerLocation>>
  >;
  /** 小程序角色权限区域 总行数 */
  readonly userPowerLocationCount?: Maybe<Scalars["Int"]>;
  /** 小程序角色权限区域 分页查询 */
  readonly userPowerLocationList?: Maybe<UserPowerLocationList>;
  /** VIEW  id 获取 */
  readonly vAppUser?: Maybe<VAppUser>;
  /** VIEW 有条件返回 */
  readonly vAppUserAll?: Maybe<ReadonlyArray<Maybe<VAppUser>>>;
  /** VIEW 总行数 */
  readonly vAppUserCount?: Maybe<Scalars["Int"]>;
  /** VIEW  id 获取 */
  readonly vAppUserExpRanking?: Maybe<VAppUserExpRanking>;
  /** VIEW 有条件返回 */
  readonly vAppUserExpRankingAll?: Maybe<
    ReadonlyArray<Maybe<VAppUserExpRanking>>
  >;
  /** VIEW 总行数 */
  readonly vAppUserExpRankingCount?: Maybe<Scalars["Int"]>;
  /** VIEW 分页查询 */
  readonly vAppUserExpRankingList?: Maybe<VAppUserExpRankingList>;
  /** VIEW 分页查询 */
  readonly vAppUserList?: Maybe<VAppUserList>;
  /** VIEW  id 获取 */
  readonly vAppUserUpvoteRanking?: Maybe<VAppUserUpvoteRanking>;
  /** VIEW 有条件返回 */
  readonly vAppUserUpvoteRankingAll?: Maybe<
    ReadonlyArray<Maybe<VAppUserUpvoteRanking>>
  >;
  /** VIEW 总行数 */
  readonly vAppUserUpvoteRankingCount?: Maybe<Scalars["Int"]>;
  /** VIEW 分页查询 */
  readonly vAppUserUpvoteRankingList?: Maybe<VAppUserUpvoteRankingList>;
  /** VIEW  id 获取 */
  readonly vCommunityUpvoteRanking?: Maybe<VCommunityUpvoteRanking>;
  /** VIEW 有条件返回 */
  readonly vCommunityUpvoteRankingAll?: Maybe<
    ReadonlyArray<Maybe<VCommunityUpvoteRanking>>
  >;
  /** VIEW 总行数 */
  readonly vCommunityUpvoteRankingCount?: Maybe<Scalars["Int"]>;
  /** VIEW 分页查询 */
  readonly vCommunityUpvoteRankingList?: Maybe<VCommunityUpvoteRankingList>;
  /** VIEW  id 获取 */
  readonly vGroupShoppingGoods?: Maybe<VGroupShoppingGoods>;
  /** VIEW 有条件返回 */
  readonly vGroupShoppingGoodsAll?: Maybe<
    ReadonlyArray<Maybe<VGroupShoppingGoods>>
  >;
  /** VIEW 总行数 */
  readonly vGroupShoppingGoodsCount?: Maybe<Scalars["Int"]>;
  /** VIEW 分页查询 */
  readonly vGroupShoppingGoodsList?: Maybe<VGroupShoppingGoodsList>;
  /** VIEW  id 获取 */
  readonly vInhaPointsTrackingOrder?: Maybe<VInhaPointsTrackingOrder>;
  /** VIEW 有条件返回 */
  readonly vInhaPointsTrackingOrderAll?: Maybe<
    ReadonlyArray<Maybe<VInhaPointsTrackingOrder>>
  >;
  /** VIEW 总行数 */
  readonly vInhaPointsTrackingOrderCount?: Maybe<Scalars["Int"]>;
  /** VIEW 分页查询 */
  readonly vInhaPointsTrackingOrderList?: Maybe<VInhaPointsTrackingOrderList>;
  /** VIEW  id 获取 */
  readonly vStoneScoreLottery?: Maybe<VStoneScoreLottery>;
  /** VIEW 有条件返回 */
  readonly vStoneScoreLotteryAll?: Maybe<
    ReadonlyArray<Maybe<VStoneScoreLottery>>
  >;
  /** VIEW 总行数 */
  readonly vStoneScoreLotteryCount?: Maybe<Scalars["Int"]>;
  /** VIEW 分页查询 */
  readonly vStoneScoreLotteryList?: Maybe<VStoneScoreLotteryList>;
  /** VIEW  id 获取 */
  readonly vStoneScoreSignIn?: Maybe<VStoneScoreSignIn>;
  /** VIEW 有条件返回 */
  readonly vStoneScoreSignInAll?: Maybe<
    ReadonlyArray<Maybe<VStoneScoreSignIn>>
  >;
  /** VIEW 总行数 */
  readonly vStoneScoreSignInCount?: Maybe<Scalars["Int"]>;
  /** VIEW 分页查询 */
  readonly vStoneScoreSignInList?: Maybe<VStoneScoreSignInList>;
  /** VIEW  id 获取 */
  readonly vStoneScoreTrackingOrder?: Maybe<VStoneScoreTrackingOrder>;
  /** VIEW 有条件返回 */
  readonly vStoneScoreTrackingOrderAll?: Maybe<
    ReadonlyArray<Maybe<VStoneScoreTrackingOrder>>
  >;
  /** VIEW 总行数 */
  readonly vStoneScoreTrackingOrderCount?: Maybe<Scalars["Int"]>;
  /** VIEW 分页查询 */
  readonly vStoneScoreTrackingOrderList?: Maybe<VStoneScoreTrackingOrderList>;
};

export type QueryActivitySettingsArgs = {
  id: Scalars["ID"];
};

export type QueryActivitySettingsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryActivitySettingsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryActivitySettingsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAddressLibraryArgs = {
  id: Scalars["ID"];
};

export type QueryAddressLibraryActivityArgs = {
  id: Scalars["ID"];
};

export type QueryAddressLibraryActivityAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAddressLibraryActivityCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAddressLibraryActivityListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAddressLibraryAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAddressLibraryCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAddressLibraryListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAggregateArgs = {
  aggregateFunction: AggregateFunctionEnum;
  field: Scalars["String"];
  modelName: Scalars["String"];
  options?: Maybe<AggregateOptions>;
};

export type QueryAmapGeofenceStatusArgs = {
  diu: Scalars["String"];
  locations: Scalars["String"];
  startKey?: Maybe<Scalars["String"]>;
  uid?: Maybe<Scalars["String"]>;
};

export type QueryAmapGetGeofenceMetaArgs = {
  gid?: Maybe<Scalars["String"]>;
  id?: Maybe<Scalars["String"]>;
  name?: Maybe<Scalars["String"]>;
};

export type QueryAppUserArgs = {
  id: Scalars["ID"];
};

export type QueryAppUserActivityArgs = {
  id: Scalars["ID"];
};

export type QueryAppUserActivityAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserActivityCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserActivityListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserAddressArgs = {
  id: Scalars["ID"];
};

export type QueryAppUserAddressAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserAddressCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserAddressListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserDetailsArgs = {
  id: Scalars["ID"];
};

export type QueryAppUserDetailsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserDetailsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserDetailsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserInviteArgs = {
  id: Scalars["ID"];
};

export type QueryAppUserInviteAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserInviteCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserInviteListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserPowerArgs = {
  id: Scalars["ID"];
};

export type QueryAppUserPowerAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserPowerCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserPowerListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserUpvoteArgs = {
  id: Scalars["ID"];
};

export type QueryAppUserUpvoteAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserUpvoteCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryAppUserUpvoteListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArrangementArgs = {
  id: Scalars["ID"];
};

export type QueryArrangementAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArrangementCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArrangementListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArticleArgs = {
  id: Scalars["ID"];
};

export type QueryArticleAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArticleCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArticleFileArgs = {
  id: Scalars["ID"];
};

export type QueryArticleFileAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArticleFileCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArticleFileListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArticleListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArticleReadRecordArgs = {
  id: Scalars["ID"];
};

export type QueryArticleReadRecordAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArticleReadRecordCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryArticleReadRecordListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBussinessActivityArgs = {
  id: Scalars["ID"];
};

export type QueryBussinessActivityAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBussinessActivityCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBussinessActivityListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBussinessAdvertisingRewardArgs = {
  id: Scalars["ID"];
};

export type QueryBussinessAdvertisingRewardAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBussinessAdvertisingRewardCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryBussinessAdvertisingRewardListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCardCodeFindAppUserArgs = {
  cardCode: Scalars["String"];
};

export type QueryCardCodeTempArgs = {
  id: Scalars["ID"];
};

export type QueryCardCodeTempAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCardCodeTempCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCardCodeTempListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardArgs = {
  id: Scalars["ID"];
};

export type QueryCommentBoardAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardLogArgs = {
  id: Scalars["ID"];
};

export type QueryCommentBoardLogAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardLogCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardLogListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardStatArgs = {
  id: Scalars["ID"];
};

export type QueryCommentBoardStatAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardStatCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardStatListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardVoteArgs = {
  id: Scalars["ID"];
};

export type QueryCommentBoardVoteAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardVoteCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardVoteListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardVoteScoreArgs = {
  id: Scalars["ID"];
};

export type QueryCommentBoardVoteScoreAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardVoteScoreCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentBoardVoteScoreListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentClassifyArgs = {
  id: Scalars["ID"];
};

export type QueryCommentClassifyAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentClassifyCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentClassifyListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentImageArgs = {
  id: Scalars["ID"];
};

export type QueryCommentImageAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentImageCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentImageListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentScoreLevelArgs = {
  id: Scalars["ID"];
};

export type QueryCommentScoreLevelAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentScoreLevelCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommentScoreLevelListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommunityUpvoteArgs = {
  id: Scalars["ID"];
};

export type QueryCommunityUpvoteActivityArgs = {
  id: Scalars["ID"];
};

export type QueryCommunityUpvoteActivityAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommunityUpvoteActivityCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommunityUpvoteActivityListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommunityUpvoteAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommunityUpvoteCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCommunityUpvoteListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCooperationMerchantArgs = {
  id: Scalars["ID"];
};

export type QueryCooperationMerchantAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCooperationMerchantCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCooperationMerchantCouponArgs = {
  id: Scalars["ID"];
};

export type QueryCooperationMerchantCouponAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCooperationMerchantCouponCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCooperationMerchantCouponListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCooperationMerchantListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponGrantComboSaleArgs = {
  id: Scalars["ID"];
};

export type QueryCouponGrantComboSaleAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponGrantComboSaleCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponGrantComboSaleListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponGrantExchangeArgs = {
  id: Scalars["ID"];
};

export type QueryCouponGrantExchangeAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponGrantExchangeCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponGrantExchangeListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponGrantSpecialOffersArgs = {
  id: Scalars["ID"];
};

export type QueryCouponGrantSpecialOffersAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponGrantSpecialOffersCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponGrantSpecialOffersListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponOrderArgs = {
  id: Scalars["ID"];
};

export type QueryCouponOrderAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponOrderCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponOrderListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponOrderLogArgs = {
  id: Scalars["ID"];
};

export type QueryCouponOrderLogAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponOrderLogCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponOrderLogListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponQrcodeComboSaleArgs = {
  id: Scalars["ID"];
};

export type QueryCouponQrcodeComboSaleAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponQrcodeComboSaleCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponQrcodeComboSaleListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponQrcodeExchangeArgs = {
  id: Scalars["ID"];
};

export type QueryCouponQrcodeExchangeAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponQrcodeExchangeCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponQrcodeExchangeListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponQrcodeSpecialOffersArgs = {
  id: Scalars["ID"];
};

export type QueryCouponQrcodeSpecialOffersAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponQrcodeSpecialOffersCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCouponQrcodeSpecialOffersListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCurrencyExchangeRateArgs = {
  id: Scalars["ID"];
};

export type QueryCurrencyExchangeRateAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCurrencyExchangeRateCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryCurrencyExchangeRateListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryDataDictionarySystemArgs = {
  id: Scalars["ID"];
};

export type QueryDataDictionarySystemAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryDataDictionarySystemCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryDataDictionarySystemListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryDemoWaterArgs = {
  id: Scalars["ID"];
};

export type QueryDemoWaterAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryDemoWaterCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryDemoWaterListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryEmsCnplAttentionArgs = {
  id: Scalars["ID"];
};

export type QueryEmsCnplAttentionAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryEmsCnplAttentionCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryEmsCnplAttentionListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryFileArgs = {
  id: Scalars["ID"];
};

export type QueryFileAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryFileCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryFileListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryFindAllArgs = {
  modelName: Scalars["String"];
  options?: Maybe<FindAllOptions>;
};

export type QueryFrontEndCacheArgs = {
  id: Scalars["ID"];
};

export type QueryFrontEndCacheAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryFrontEndCacheCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryFrontEndCacheListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryGreenViewPointsArgs = {
  id: Scalars["ID"];
};

export type QueryGreenViewPointsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryGreenViewPointsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryGreenViewPointsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryGroupShoppingGoodsArgs = {
  id: Scalars["ID"];
};

export type QueryGroupShoppingGoodsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryGroupShoppingGoodsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryGroupShoppingGoodsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryGroupShoppingGoodsOrderArgs = {
  id: Scalars["ID"];
};

export type QueryGroupShoppingGoodsOrderAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryGroupShoppingGoodsOrderCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryGroupShoppingGoodsOrderListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryHomePageDetailsArgs = {
  id: Scalars["ID"];
};

export type QueryHomePageDetailsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryHomePageDetailsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryHomePageDetailsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryHomePageSystemArgs = {
  id: Scalars["ID"];
};

export type QueryHomePageSystemAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryHomePageSystemCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryHomePageSystemImageArgs = {
  id: Scalars["ID"];
};

export type QueryHomePageSystemImageAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryHomePageSystemImageCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryHomePageSystemImageListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryHomePageSystemListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryIncentiveValueArgs = {
  id: Scalars["ID"];
};

export type QueryIncentiveValueAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryIncentiveValueCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryIncentiveValueListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryInhabitantPointsRelationArgs = {
  id: Scalars["ID"];
};

export type QueryInhabitantPointsRelationAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryInhabitantPointsRelationCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryInhabitantPointsRelationListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryInhabitantPointsRewardDetailsArgs = {
  id: Scalars["ID"];
};

export type QueryInhabitantPointsRewardDetailsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryInhabitantPointsRewardDetailsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryInhabitantPointsRewardDetailsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryJdongApiLogsArgs = {
  id: Scalars["ID"];
};

export type QueryJdongApiLogsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryJdongApiLogsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryJdongApiLogsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryJdongTrackingOrderArgs = {
  id: Scalars["ID"];
};

export type QueryJdongTrackingOrderAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryJdongTrackingOrderCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryJdongTrackingOrderListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryJdongUserBuildingArgs = {
  id: Scalars["ID"];
};

export type QueryJdongUserBuildingAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryJdongUserBuildingCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryJdongUserBuildingListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLoginLasttimeArgs = {
  id: Scalars["ID"];
};

export type QueryLoginLasttimeAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLoginLasttimeCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLoginLasttimeListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLoginRecordArgs = {
  id: Scalars["ID"];
};

export type QueryLoginRecordAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLoginRecordCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLoginRecordListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLotteryDrawActivityArgs = {
  id: Scalars["ID"];
};

export type QueryLotteryDrawActivityAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLotteryDrawActivityCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLotteryDrawActivityListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLotteryDrawRecordArgs = {
  id: Scalars["ID"];
};

export type QueryLotteryDrawRecordAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLotteryDrawRecordCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLotteryDrawRecordListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLuckyStarWishesArgs = {
  id: Scalars["ID"];
};

export type QueryLuckyStarWishesAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLuckyStarWishesCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryLuckyStarWishesListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryMailAddressArgs = {
  id: Scalars["ID"];
};

export type QueryMailAddressAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryMailAddressCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryMailAddressListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryMapPointArgs = {
  id: Scalars["ID"];
};

export type QueryMapPointAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryMapPointCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryMapPointListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryMessageQueueJobsArgs = {
  id: Scalars["ID"];
};

export type QueryMessageQueueJobsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryMessageQueueJobsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryMessageQueueJobsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryPowerArgs = {
  id: Scalars["ID"];
};

export type QueryPowerAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryPowerCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryPowerListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionAnswerRecordArgs = {
  id: Scalars["ID"];
};

export type QueryQuestionAnswerRecordAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionAnswerRecordCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionAnswerRecordListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionBankArgs = {
  id: Scalars["ID"];
};

export type QueryQuestionBankAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionBankCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionBankListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionBankRandomArgs = {
  count: Scalars["Int"];
};

export type QueryQuestionnaireArgs = {
  id: Scalars["ID"];
};

export type QueryQuestionnaireAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireLocationArgs = {
  id: Scalars["ID"];
};

export type QueryQuestionnaireLocationAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireLocationCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireLocationListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireOptionsArgs = {
  id: Scalars["ID"];
};

export type QueryQuestionnaireOptionsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireOptionsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireOptionsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireQuestionArgs = {
  id: Scalars["ID"];
};

export type QueryQuestionnaireQuestionAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireQuestionCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireQuestionListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireUserAnswerArgs = {
  id: Scalars["ID"];
};

export type QueryQuestionnaireUserAnswerAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireUserAnswerCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireUserAnswerListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireUserRecordArgs = {
  id: Scalars["ID"];
};

export type QueryQuestionnaireUserRecordAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireUserRecordCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryQuestionnaireUserRecordListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryReportArgs = {
  id: Scalars["ID"];
};

export type QueryReportAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryReportCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryReportListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityCardLogsArgs = {
  id: Scalars["ID"];
};

export type QueryShifenCommunityCardLogsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityCardLogsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityCardLogsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityInhabitantCardArgs = {
  id: Scalars["ID"];
};

export type QueryShifenCommunityInhabitantCardAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityInhabitantCardCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityInhabitantCardListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityInhabitantPointsArgs = {
  id: Scalars["ID"];
};

export type QueryShifenCommunityInhabitantPointsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityInhabitantPointsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityInhabitantPointsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityInhabitantTransferArgs = {
  id: Scalars["ID"];
};

export type QueryShifenCommunityInhabitantTransferAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityInhabitantTransferCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityInhabitantTransferListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityPointsArgs = {
  id: Scalars["ID"];
};

export type QueryShifenCommunityPointsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityPointsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityPointsImageArgs = {
  id: Scalars["ID"];
};

export type QueryShifenCommunityPointsImageAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityPointsImageCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityPointsImageListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShifenCommunityPointsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShoppingGoodsArgs = {
  id: Scalars["ID"];
};

export type QueryShoppingGoodsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShoppingGoodsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShoppingGoodsImageArgs = {
  id: Scalars["ID"];
};

export type QueryShoppingGoodsImageAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShoppingGoodsImageCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShoppingGoodsImageListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShoppingGoodsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShoppingGoodsStockArgs = {
  id: Scalars["ID"];
};

export type QueryShoppingGoodsStockAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShoppingGoodsStockCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShoppingGoodsStockListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShouhuojiyunOrderArgs = {
  param: ShouhuojiyunOrderIn;
};

export type QueryShouhuojiyunPointsArgs = {
  id: Scalars["ID"];
};

export type QueryShouhuojiyunPointsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShouhuojiyunPointsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryShouhuojiyunPointsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySignInLabelArgs = {
  id: Scalars["ID"];
};

export type QuerySignInLabelAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySignInLabelCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySignInLabelListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySignInRecordArgs = {
  id: Scalars["ID"];
};

export type QuerySignInRecordAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySignInRecordCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySignInRecordListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySignInSharedArgs = {
  id: Scalars["ID"];
};

export type QuerySignInSharedAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySignInSharedCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySignInSharedListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySmsArgs = {
  id: Scalars["ID"];
};

export type QuerySmsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySmsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySmsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchLotteryRunLogArgs = {
  id: Scalars["ID"];
};

export type QuerySnatchLotteryRunLogAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchLotteryRunLogCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchLotteryRunLogListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureArgs = {
  id: Scalars["ID"];
};

export type QuerySnatchTreasureAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureRecordArgs = {
  id: Scalars["ID"];
};

export type QuerySnatchTreasureRecordAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureRecordCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureRecordListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureSharedArgs = {
  id: Scalars["ID"];
};

export type QuerySnatchTreasureSharedAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureSharedCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureSharedListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureStatArgs = {
  id?: Maybe<Scalars["String"]>;
};

export type QuerySnatchTreasureTicketArgs = {
  id: Scalars["ID"];
};

export type QuerySnatchTreasureTicketAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureTicketCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureTicketListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureUserArgs = {
  id: Scalars["ID"];
};

export type QuerySnatchTreasureUserAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureUserCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QuerySnatchTreasureUserListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneAccountRecordArgs = {
  id: Scalars["ID"];
};

export type QueryStoneAccountRecordAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneAccountRecordCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneAccountRecordImageArgs = {
  id: Scalars["ID"];
};

export type QueryStoneAccountRecordImageAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneAccountRecordImageCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneAccountRecordImageListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneAccountRecordListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneAccountResidentialArgs = {
  id: Scalars["ID"];
};

export type QueryStoneAccountResidentialAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneAccountResidentialCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneAccountResidentialListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreArgs = {
  id: Scalars["ID"];
};

export type QueryStoneScoreAccountArgs = {
  id: Scalars["ID"];
};

export type QueryStoneScoreAccountAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreAccountCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreAccountListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreRelationArgs = {
  id: Scalars["ID"];
};

export type QueryStoneScoreRelationAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreRelationCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreRelationListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreRewardDetailsArgs = {
  id: Scalars["ID"];
};

export type QueryStoneScoreRewardDetailsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreRewardDetailsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneScoreRewardDetailsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneTalentLevelArgs = {
  id: Scalars["ID"];
};

export type QueryStoneTalentLevelAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneTalentLevelCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneTalentLevelEntryArgs = {
  id: Scalars["ID"];
};

export type QueryStoneTalentLevelEntryAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneTalentLevelEntryCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneTalentLevelEntryListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryStoneTalentLevelListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryTrackingOrderArgs = {
  id: Scalars["ID"];
};

export type QueryTrackingOrderAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryTrackingOrderCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryTrackingOrderListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryTrackingOrderLogArgs = {
  id: Scalars["ID"];
};

export type QueryTrackingOrderLogAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryTrackingOrderLogCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryTrackingOrderLogListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryTrashTcpArgs = {
  id: Scalars["ID"];
};

export type QueryTrashTcpAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryTrashTcpCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryTrashTcpListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryUpvoteRecordArgs = {
  id: Scalars["ID"];
};

export type QueryUpvoteRecordAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryUpvoteRecordCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryUpvoteRecordListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryUserPowerLocationArgs = {
  id: Scalars["ID"];
};

export type QueryUserPowerLocationAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryUserPowerLocationCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryUserPowerLocationListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVAppUserArgs = {
  id: Scalars["ID"];
};

export type QueryVAppUserAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVAppUserCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVAppUserExpRankingArgs = {
  id: Scalars["ID"];
};

export type QueryVAppUserExpRankingAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVAppUserExpRankingCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVAppUserExpRankingListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVAppUserListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVAppUserUpvoteRankingArgs = {
  id: Scalars["ID"];
};

export type QueryVAppUserUpvoteRankingAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVAppUserUpvoteRankingCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVAppUserUpvoteRankingListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVCommunityUpvoteRankingArgs = {
  id: Scalars["ID"];
};

export type QueryVCommunityUpvoteRankingAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVCommunityUpvoteRankingCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVCommunityUpvoteRankingListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVGroupShoppingGoodsArgs = {
  id: Scalars["ID"];
};

export type QueryVGroupShoppingGoodsAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVGroupShoppingGoodsCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVGroupShoppingGoodsListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVInhaPointsTrackingOrderArgs = {
  id: Scalars["ID"];
};

export type QueryVInhaPointsTrackingOrderAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVInhaPointsTrackingOrderCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVInhaPointsTrackingOrderListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVStoneScoreLotteryArgs = {
  id: Scalars["ID"];
};

export type QueryVStoneScoreLotteryAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVStoneScoreLotteryCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVStoneScoreLotteryListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVStoneScoreSignInArgs = {
  id: Scalars["ID"];
};

export type QueryVStoneScoreSignInAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVStoneScoreSignInCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVStoneScoreSignInListArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVStoneScoreTrackingOrderArgs = {
  id: Scalars["ID"];
};

export type QueryVStoneScoreTrackingOrderAllArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVStoneScoreTrackingOrderCountArgs = {
  param?: Maybe<QueryListParam>;
};

export type QueryVStoneScoreTrackingOrderListArgs = {
  param?: Maybe<QueryListParam>;
};

/** 查询参数 */
export type QueryListParam = {
  readonly limit?: Maybe<Scalars["Int"]>;
  readonly offset?: Maybe<Scalars["Int"]>;
  readonly order?: Maybe<
    ReadonlyArray<Maybe<ReadonlyArray<Maybe<Scalars["String"]>>>>
  >;
  readonly where?: Maybe<Scalars["JSONObject"]>;
};

/** 用户答题记录 */
export type QuestionAnswerRecord = {
  readonly __typename?: "QuestionAnswerRecord";
  /** 答题结果(是否通过, Y/N) */
  readonly answerResult?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 问题相关数据 */
  readonly questionAnswer?: Maybe<Scalars["JSONObject"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 用户答题记录 分页查询返回 */
export type QuestionAnswerRecordList = {
  readonly __typename?: "QuestionAnswerRecordList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<QuestionAnswerRecord>>>;
};

export type QuestionAnswerRecordSaveIn = {
  /** 答题结果(是否通过, Y/N) */
  readonly answerResult?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 问题相关数据 */
  readonly questionAnswer?: Maybe<Scalars["JSONObject"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 活动题库 */
export type QuestionBank = {
  readonly __typename?: "QuestionBank";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 问题正确答案 */
  readonly questionAnswer?: Maybe<Scalars["JSONObject"]>;
  /** 问题内容 */
  readonly questionContext?: Maybe<Scalars["String"]>;
  /** 答案选项 */
  readonly questionOptions?: Maybe<Scalars["JSONObject"]>;
  /** 问题类型(radio, 单选; checkbox, 多选; text, 文本) */
  readonly questionType?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 活动题库 分页查询返回 */
export type QuestionBankList = {
  readonly __typename?: "QuestionBankList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<QuestionBank>>>;
};

export type QuestionBankSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 问题正确答案 */
  readonly questionAnswer?: Maybe<Scalars["JSONObject"]>;
  /** 问题内容 */
  readonly questionContext?: Maybe<Scalars["String"]>;
  /** 答案选项 */
  readonly questionOptions?: Maybe<Scalars["JSONObject"]>;
  /** 问题类型(radio, 单选; checkbox, 多选; text, 文本) */
  readonly questionType?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 调查问卷列表 */
export type Questionnaire = {
  readonly __typename?: "Questionnaire";
  /** 目标小程序appid */
  readonly appid?: Maybe<Scalars["String"]>;
  /** 开始时间 */
  readonly beginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 是否已完成(Y/N) */
  readonly completed?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 答题数量 */
  readonly limit?: Maybe<Scalars["Float"]>;
  /** 开放区域(all, 全部; part, 部分) */
  readonly openScope?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 目标小程序页面路径 */
  readonly pagePath?: Maybe<Scalars["String"]>;
  readonly questionnaireLocationQuestonnaireId?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireLocation>>
  >;
  readonly questionnaireQuestionQuestionnaireId?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireQuestion>>
  >;
  readonly questionnaireUserRecordQuestionnaireId?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireUserRecord>>
  >;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 石分宝奖励数值 */
  readonly rewardScore?: Maybe<Scalars["Float"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 标题 */
  readonly title?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 已参与人数 */
  readonly userCount?: Maybe<Scalars["Float"]>;
};

/** 调查问卷列表 */
export type QuestionnaireQuestionnaireLocationQuestonnaireIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 调查问卷列表 */
export type QuestionnaireQuestionnaireQuestionQuestionnaireIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 调查问卷列表 */
export type QuestionnaireQuestionnaireUserRecordQuestionnaireIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 调查问卷列表 分页查询返回 */
export type QuestionnaireList = {
  readonly __typename?: "QuestionnaireList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<Questionnaire>>>;
};

/** 调查问卷列表 */
export type QuestionnaireLocation = {
  readonly __typename?: "QuestionnaireLocation";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  readonly communityIdObj?: Maybe<AddressLibrary>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 问卷ID */
  readonly questonnaireId?: Maybe<Scalars["String"]>;
  readonly questonnaireIdObj?: Maybe<Questionnaire>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  readonly residentialIdObj?: Maybe<AddressLibrary>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  readonly streetIdObj?: Maybe<AddressLibrary>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 调查问卷列表 分页查询返回 */
export type QuestionnaireLocationList = {
  readonly __typename?: "QuestionnaireLocationList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<QuestionnaireLocation>>>;
};

export type QuestionnaireLocationSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 问卷ID */
  readonly questonnaireId?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 调查问卷选项表 */
export type QuestionnaireOptions = {
  readonly __typename?: "QuestionnaireOptions";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 选项内容 */
  readonly content?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 答题数量 */
  readonly limit?: Maybe<Scalars["Float"]>;
  /** 选项编号(每个问题单独的编号) */
  readonly optionsNo?: Maybe<Scalars["Float"]>;
  /** 问题ID */
  readonly questionId?: Maybe<Scalars["String"]>;
  readonly questionIdObj?: Maybe<QuestionnaireQuestion>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 调查问卷选项表 分页查询返回 */
export type QuestionnaireOptionsList = {
  readonly __typename?: "QuestionnaireOptionsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<QuestionnaireOptions>>>;
};

export type QuestionnaireOptionsSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 选项内容 */
  readonly content?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 答题数量 */
  readonly limit?: Maybe<Scalars["Float"]>;
  /** 选项编号(每个问题单独的编号) */
  readonly optionsNo?: Maybe<Scalars["Float"]>;
  /** 问题ID */
  readonly questionId?: Maybe<Scalars["String"]>;
  readonly questionIdObj?: Maybe<QuestionnaireQuestionSaveIn>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 调查问卷问题表 */
export type QuestionnaireQuestion = {
  readonly __typename?: "QuestionnaireQuestion";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 问题编号 */
  readonly questionNo?: Maybe<Scalars["Float"]>;
  /** 问题类型(单选, option; 多选, checkbox; 文本输入, textarea) */
  readonly questionType?: Maybe<Scalars["String"]>;
  /** 调查问卷ID */
  readonly questionnaireId?: Maybe<Scalars["String"]>;
  readonly questionnaireIdObj?: Maybe<Questionnaire>;
  readonly questionnaireOptionsQuestionId?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireOptions>>
  >;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 问题标题 */
  readonly subject?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 调查问卷问题表 */
export type QuestionnaireQuestionQuestionnaireOptionsQuestionIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 调查问卷问题表 分页查询返回 */
export type QuestionnaireQuestionList = {
  readonly __typename?: "QuestionnaireQuestionList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<QuestionnaireQuestion>>>;
};

export type QuestionnaireQuestionSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 问题编号 */
  readonly questionNo?: Maybe<Scalars["Float"]>;
  /** 问题类型(单选, option; 多选, checkbox; 文本输入, textarea) */
  readonly questionType?: Maybe<Scalars["String"]>;
  /** 调查问卷ID */
  readonly questionnaireId?: Maybe<Scalars["String"]>;
  readonly questionnaireIdObj?: Maybe<QuestionnaireSaveIn>;
  readonly questionnaireOptionsQuestionId?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireOptionsSaveIn>>
  >;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 问题标题 */
  readonly subject?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type QuestionnaireSaveIn = {
  /** 目标小程序appid */
  readonly appid?: Maybe<Scalars["String"]>;
  /** 开始时间 */
  readonly beginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 是否已完成(Y/N) */
  readonly completed?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 答题数量 */
  readonly limit?: Maybe<Scalars["Float"]>;
  /** 开放区域(all, 全部; part, 部分) */
  readonly openScope?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 目标小程序页面路径 */
  readonly pagePath?: Maybe<Scalars["String"]>;
  readonly questionnaireLocationQuestonnaireId?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireLocationSaveIn>>
  >;
  readonly questionnaireQuestionQuestionnaireId?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireQuestionSaveIn>>
  >;
  readonly questionnaireUserRecordQuestionnaireId?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireUserRecordSaveIn>>
  >;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 石分宝奖励数值 */
  readonly rewardScore?: Maybe<Scalars["Float"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 标题 */
  readonly title?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 已参与人数 */
  readonly userCount?: Maybe<Scalars["Float"]>;
};

/** 调查问卷用户应答记录 */
export type QuestionnaireUserAnswer = {
  readonly __typename?: "QuestionnaireUserAnswer";
  /** 选项编号 */
  readonly answerNo?: Maybe<Scalars["Float"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 答案内容 */
  readonly content?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 问题编号 */
  readonly questionNo?: Maybe<Scalars["Float"]>;
  /** 调查问卷ID */
  readonly questionnaireRecordId?: Maybe<Scalars["String"]>;
  readonly questionnaireRecordIdObj?: Maybe<QuestionnaireUserRecord>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 调查问卷用户应答记录 分页查询返回 */
export type QuestionnaireUserAnswerList = {
  readonly __typename?: "QuestionnaireUserAnswerList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<QuestionnaireUserAnswer>>>;
};

export type QuestionnaireUserAnswerSaveIn = {
  /** 选项编号 */
  readonly answerNo?: Maybe<Scalars["Float"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 答案内容 */
  readonly content?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 问题编号 */
  readonly questionNo?: Maybe<Scalars["Float"]>;
  /** 调查问卷ID */
  readonly questionnaireRecordId?: Maybe<Scalars["String"]>;
  readonly questionnaireRecordIdObj?: Maybe<QuestionnaireUserRecordSaveIn>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 调查问卷记录 */
export type QuestionnaireUserRecord = {
  readonly __typename?: "QuestionnaireUserRecord";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 电话 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 调查问卷ID */
  readonly questionnaireId?: Maybe<Scalars["String"]>;
  readonly questionnaireIdObj?: Maybe<Questionnaire>;
  readonly questionnaireUserAnswerQuestionnaireRecordId?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireUserAnswer>>
  >;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 状态(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 问卷提交时间 */
  readonly submitTime?: Maybe<Scalars["DateTime"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 调查问卷记录 */
export type QuestionnaireUserRecordQuestionnaireUserAnswerQuestionnaireRecordIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 调查问卷记录 分页查询返回 */
export type QuestionnaireUserRecordList = {
  readonly __typename?: "QuestionnaireUserRecordList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<QuestionnaireUserRecord>>>;
};

export type QuestionnaireUserRecordSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 电话 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 调查问卷ID */
  readonly questionnaireId?: Maybe<Scalars["String"]>;
  readonly questionnaireUserAnswerQuestionnaireRecordId?: Maybe<
    ReadonlyArray<Maybe<QuestionnaireUserAnswerSaveIn>>
  >;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 状态(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 问卷提交时间 */
  readonly submitTime?: Maybe<Scalars["DateTime"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 报表存储 */
export type Report = {
  readonly __typename?: "Report";
  /** 操作人ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 报表名称 */
  readonly name?: Maybe<Scalars["String"]>;
  /** 报表类型 */
  readonly optionsType?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 开始时间 */
  readonly startTime?: Maybe<Scalars["DateTime"]>;
  /** 报表期数 */
  readonly times?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 报表存储 分页查询返回 */
export type ReportList = {
  readonly __typename?: "ReportList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<Report>>>;
};

export type ReportSaveIn = {
  /** 操作人ID */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 报表名称 */
  readonly name?: Maybe<Scalars["String"]>;
  /** 报表类型 */
  readonly optionsType?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 开始时间 */
  readonly startTime?: Maybe<Scalars["DateTime"]>;
  /** 报表期数 */
  readonly times?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type ServerInfo = {
  readonly __typename?: "ServerInfo";
  readonly datetime?: Maybe<Scalars["DateTime"]>;
};

/** 石分社区-居民卡日志 */
export type ShifenCommunityCardLogs = {
  readonly __typename?: "ShifenCommunityCardLogs";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 日志内容 */
  readonly content?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 居民卡id */
  readonly inhabitantId?: Maybe<Scalars["String"]>;
  readonly inhabitantIdObj?: Maybe<ShifenCommunityInhabitantCard>;
  /** 操作方式(create, 创建居民卡; perfect, 完善居民信息; binding, 绑定账号; lost, 挂失; activation, 激活; relieve, 解除绑定; editor, 修改居民信息; transferFrom, 积分转移出; transferTo, 积分转移入) */
  readonly operatorType?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分社区-居民卡日志 分页查询返回 */
export type ShifenCommunityCardLogsList = {
  readonly __typename?: "ShifenCommunityCardLogsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ShifenCommunityCardLogs>>>;
};

export type ShifenCommunityCardLogsSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 日志内容 */
  readonly content?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 居民卡id */
  readonly inhabitantId?: Maybe<Scalars["String"]>;
  /** 操作方式(create, 创建居民卡; perfect, 完善居民信息; binding, 绑定账号; lost, 挂失; activation, 激活; relieve, 解除绑定; editor, 修改居民信息; transferFrom, 积分转移出; transferTo, 积分转移入) */
  readonly operatorType?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分社区-居民卡 */
export type ShifenCommunityInhabitantCard = {
  readonly __typename?: "ShifenCommunityInhabitantCard";
  /** 所属用户id{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 所属用户id{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 楼号 */
  readonly building?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 卡片状态(binding 已绑定, unbind 未绑定, lost 已挂失, disable 已作废) */
  readonly cardStatus?: Maybe<Scalars["String"]>;
  /** 卡片类型(inhabitant, 居民卡) */
  readonly cardType?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  readonly communityIdObj?: Maybe<AddressLibrary>;
  /** 联系人 */
  readonly contact?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 省/市-街道-社区-小区 */
  readonly location?: Maybe<Scalars["String"]>;
  /** 门牌号 */
  readonly plate?: Maybe<Scalars["String"]>;
  /** 石分社区积分 */
  readonly points?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  readonly residentialIdObj?: Maybe<AddressLibrary>;
  readonly shifenCommunityCardLogsInhabitantId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityCardLogs>>
  >;
  readonly shifenCommunityInhabitantPointsInhabitantId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityInhabitantPoints>>
  >;
  readonly shifenCommunityInhabitantTransferDstInhabitantId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityInhabitantTransfer>>
  >;
  readonly shifenCommunityInhabitantTransferSrcInhabitantId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityInhabitantTransfer>>
  >;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  readonly streetIdObj?: Maybe<AddressLibrary>;
  /** 联系电话 */
  readonly telephone?: Maybe<Scalars["String"]>;
  /** 单元 */
  readonly unit?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分社区-居民卡 */
export type ShifenCommunityInhabitantCardShifenCommunityCardLogsInhabitantIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 石分社区-居民卡 */
export type ShifenCommunityInhabitantCardShifenCommunityInhabitantPointsInhabitantIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 石分社区-居民卡 */
export type ShifenCommunityInhabitantCardShifenCommunityInhabitantTransferDstInhabitantIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 石分社区-居民卡 */
export type ShifenCommunityInhabitantCardShifenCommunityInhabitantTransferSrcInhabitantIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 石分社区-居民卡 分页查询返回 */
export type ShifenCommunityInhabitantCardList = {
  readonly __typename?: "ShifenCommunityInhabitantCardList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ShifenCommunityInhabitantCard>>>;
};

export type ShifenCommunityInhabitantCardSaveIn = {
  /** 所属用户id{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 楼号 */
  readonly building?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 卡片状态(binding 已绑定, unbind 未绑定, lost 已挂失, disable 已作废) */
  readonly cardStatus?: Maybe<Scalars["String"]>;
  /** 卡片类型(inhabitant, 居民卡) */
  readonly cardType?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  readonly communityIdObj?: Maybe<AddressLibrarySaveIn>;
  /** 联系人 */
  readonly contact?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 省/市-街道-社区-小区 */
  readonly location?: Maybe<Scalars["String"]>;
  /** 门牌号 */
  readonly plate?: Maybe<Scalars["String"]>;
  /** 石分社区积分 */
  readonly points?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  readonly residentialIdObj?: Maybe<AddressLibrarySaveIn>;
  readonly shifenCommunityCardLogsInhabitantId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityCardLogsSaveIn>>
  >;
  readonly shifenCommunityInhabitantPointsInhabitantId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityInhabitantPointsSaveIn>>
  >;
  readonly shifenCommunityInhabitantTransferDstInhabitantId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityInhabitantTransferSaveIn>>
  >;
  readonly shifenCommunityInhabitantTransferSrcInhabitantId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityInhabitantTransferSaveIn>>
  >;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  readonly streetIdObj?: Maybe<AddressLibrarySaveIn>;
  /** 联系电话 */
  readonly telephone?: Maybe<Scalars["String"]>;
  /** 单元 */
  readonly unit?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分社区-居民卡积分变更记录 */
export type ShifenCommunityInhabitantPoints = {
  readonly __typename?: "ShifenCommunityInhabitantPoints";
  /** 帐期 */
  readonly accountPeriod?: Maybe<Scalars["String"]>;
  /** 活动编码(system 系统补偿; replace 补卡; luckDraw 抽奖; refuseClass 投放; reward 发放; inhaCash 兑换奖品, exchange: 兑换石分宝; transferFrom, 转移出; transferTo, 转移入) */
  readonly activityCode?: Maybe<Scalars["String"]>;
  /** 社区积分账户ID */
  readonly addressActivityId?: Maybe<Scalars["String"]>;
  readonly addressActivityIdObj?: Maybe<AddressLibraryActivity>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 数值 */
  readonly fraction?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 居民卡id */
  readonly inhabitantId?: Maybe<Scalars["String"]>;
  readonly inhabitantIdObj?: Maybe<ShifenCommunityInhabitantCard>;
  readonly inhabitantPointsRelationInhaPointsId?: Maybe<
    ReadonlyArray<Maybe<InhabitantPointsRelation>>
  >;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分社区-居民卡积分变更记录 */
export type ShifenCommunityInhabitantPointsInhabitantPointsRelationInhaPointsIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 石分社区-居民卡积分变更记录 分页查询返回 */
export type ShifenCommunityInhabitantPointsList = {
  readonly __typename?: "ShifenCommunityInhabitantPointsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ShifenCommunityInhabitantPoints>>>;
};

export type ShifenCommunityInhabitantPointsSaveIn = {
  /** 帐期 */
  readonly accountPeriod?: Maybe<Scalars["String"]>;
  /** 活动编码(system 系统补偿; replace 补卡; luckDraw 抽奖; refuseClass 投放; reward 发放; inhaCash 兑换奖品, exchange: 兑换石分宝; transferFrom, 转移出; transferTo, 转移入) */
  readonly activityCode?: Maybe<Scalars["String"]>;
  /** 社区积分账户ID */
  readonly addressActivityId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 数值 */
  readonly fraction?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 居民卡id */
  readonly inhabitantId?: Maybe<Scalars["String"]>;
  readonly inhabitantPointsRelationInhaPointsId?: Maybe<
    ReadonlyArray<Maybe<InhabitantPointsRelationSaveIn>>
  >;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分社区-用户积分转移记录中间表 */
export type ShifenCommunityInhabitantTransfer = {
  readonly __typename?: "ShifenCommunityInhabitantTransfer";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 目标居民卡id */
  readonly dstInhabitantId?: Maybe<Scalars["String"]>;
  readonly dstInhabitantIdObj?: Maybe<ShifenCommunityInhabitantCard>;
  /** 目标居民卡积分变更记录id */
  readonly dstInhabitantPointsId?: Maybe<Scalars["String"]>;
  readonly dstInhabitantPointsIdObj?: Maybe<ShifenCommunityInhabitantPoints>;
  /** 数值 */
  readonly fraction?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 源居民卡id */
  readonly srcInhabitantId?: Maybe<Scalars["String"]>;
  readonly srcInhabitantIdObj?: Maybe<ShifenCommunityInhabitantCard>;
  /** 源居民卡积分变更记录id */
  readonly srcInhabitantPointsId?: Maybe<Scalars["String"]>;
  readonly srcInhabitantPointsIdObj?: Maybe<ShifenCommunityInhabitantPoints>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分社区-用户积分转移记录中间表 分页查询返回 */
export type ShifenCommunityInhabitantTransferList = {
  readonly __typename?: "ShifenCommunityInhabitantTransferList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityInhabitantTransfer>>
  >;
};

export type ShifenCommunityInhabitantTransferSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 目标居民卡id */
  readonly dstInhabitantId?: Maybe<Scalars["String"]>;
  /** 目标居民卡积分变更记录id */
  readonly dstInhabitantPointsId?: Maybe<Scalars["String"]>;
  /** 数值 */
  readonly fraction?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 源居民卡id */
  readonly srcInhabitantId?: Maybe<Scalars["String"]>;
  /** 源居民卡积分变更记录id */
  readonly srcInhabitantPointsId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分社区-积分变更记录 */
export type ShifenCommunityPoints = {
  readonly __typename?: "ShifenCommunityPoints";
  /** 帐期 */
  readonly accountPeriod?: Maybe<Scalars["String"]>;
  /** 社区活动id(石分社区) */
  readonly addressActivityId?: Maybe<Scalars["String"]>;
  readonly addressActivityIdObj?: Maybe<AddressLibraryActivity>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 数值 */
  readonly fraction?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly inhabitantPointsRewardDetailsCommunityRecordId?: Maybe<
    ReadonlyArray<Maybe<InhabitantPointsRewardDetails>>
  >;
  /** 操作方式(reward, 积分发放; recharge, 充值; system, 系统补偿) */
  readonly operatorCode?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 充值金额 */
  readonly rechargeNum?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly shifenCommunityPointsImagePointsId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityPointsImage>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 用户数量 */
  readonly userCount?: Maybe<Scalars["Float"]>;
};

/** 石分社区-积分变更记录 */
export type ShifenCommunityPointsInhabitantPointsRewardDetailsCommunityRecordIdArgs =
  {
    param?: Maybe<QueryListParam>;
  };

/** 石分社区-积分变更记录 */
export type ShifenCommunityPointsShifenCommunityPointsImagePointsIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 石分社区-用户积分变更记录 */
export type ShifenCommunityPointsImage = {
  readonly __typename?: "ShifenCommunityPointsImage";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 充值记录id */
  readonly pointsId?: Maybe<Scalars["String"]>;
  readonly pointsIdObj?: Maybe<ShifenCommunityPoints>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分社区-用户积分变更记录 分页查询返回 */
export type ShifenCommunityPointsImageList = {
  readonly __typename?: "ShifenCommunityPointsImageList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ShifenCommunityPointsImage>>>;
};

export type ShifenCommunityPointsImageSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 充值记录id */
  readonly pointsId?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分社区-积分变更记录 分页查询返回 */
export type ShifenCommunityPointsList = {
  readonly __typename?: "ShifenCommunityPointsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ShifenCommunityPoints>>>;
};

export type ShifenCommunityPointsSaveIn = {
  /** 帐期 */
  readonly accountPeriod?: Maybe<Scalars["String"]>;
  /** 社区活动id(石分社区) */
  readonly addressActivityId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 数值 */
  readonly fraction?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  readonly inhabitantPointsRewardDetailsCommunityRecordId?: Maybe<
    ReadonlyArray<Maybe<InhabitantPointsRewardDetailsSaveIn>>
  >;
  /** 操作方式(reward, 积分发放; recharge, 充值; system, 系统补偿) */
  readonly operatorCode?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 充值金额 */
  readonly rechargeNum?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly shifenCommunityPointsImagePointsId?: Maybe<
    ReadonlyArray<Maybe<ShifenCommunityPointsImageSaveIn>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 用户数量 */
  readonly userCount?: Maybe<Scalars["Float"]>;
};

/** 商城商品 */
export type ShoppingGoods = {
  readonly __typename?: "ShoppingGoods";
  /** 商品编码(原厂) */
  readonly barCode?: Maybe<Scalars["String"]>;
  /** 商品品牌名称 */
  readonly brandName?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 商品分类id */
  readonly dataDictionarySystemId?: Maybe<Scalars["String"]>;
  readonly dataDictionarySystemIdObj?: Maybe<DataDictionarySystem>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 商品详情 */
  readonly details?: Maybe<Scalars["String"]>;
  /** 第三方url地址 */
  readonly externalUrl?: Maybe<Scalars["String"]>;
  /** 商品名称 */
  readonly goodsName?: Maybe<Scalars["String"]>;
  /** 商品采购价 */
  readonly goodsPrice?: Maybe<Scalars["Float"]>;
  /** 商品规格 */
  readonly goodsSpec?: Maybe<Scalars["String"]>;
  /** 商品上下架状态 Y上架N下架 */
  readonly goodsStatus?: Maybe<Scalars["String"]>;
  readonly groupShoppingGoodsShoppingGoodsId?: Maybe<
    ReadonlyArray<Maybe<GroupShoppingGoods>>
  >;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 商品来源(stoneTalent, 石分达人; jdong, 京东) */
  readonly originType?: Maybe<Scalars["String"]>;
  /** 库存扣除状态(启用/禁用, Y/N; 当状态为N时，商品不会扣减) */
  readonly reduceEnable?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly shoppingGoodsImageShoppingGoodsId?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoodsImage>>
  >;
  readonly shoppingGoodsStockShoppingGoodsId?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoodsStock>>
  >;
  /** 单位 */
  readonly shoppingUnit?: Maybe<Scalars["String"]>;
  readonly snatchTreasureShoppingGoodsId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasure>>
  >;
  /** 标签分隔符 , */
  readonly tags?: Maybe<Scalars["String"]>;
  /** 商品总库存 */
  readonly totalStock?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 商城商品 */
export type ShoppingGoodsGroupShoppingGoodsShoppingGoodsIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 商城商品 */
export type ShoppingGoodsShoppingGoodsImageShoppingGoodsIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 商城商品 */
export type ShoppingGoodsShoppingGoodsStockShoppingGoodsIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 商城商品 */
export type ShoppingGoodsSnatchTreasureShoppingGoodsIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 商城-商品-图片 */
export type ShoppingGoodsImage = {
  readonly __typename?: "ShoppingGoodsImage";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 是否封面图(是/否, Y/N) */
  readonly coverMap?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 图片类型(rotation, 轮播; details, 详情) */
  readonly imageType?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 商品id */
  readonly shoppingGoodsId?: Maybe<Scalars["String"]>;
  readonly shoppingGoodsIdObj?: Maybe<ShoppingGoods>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 商城-商品-图片 分页查询返回 */
export type ShoppingGoodsImageList = {
  readonly __typename?: "ShoppingGoodsImageList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ShoppingGoodsImage>>>;
};

export type ShoppingGoodsImageSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 是否封面图(是/否, Y/N) */
  readonly coverMap?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 图片类型(rotation, 轮播; details, 详情) */
  readonly imageType?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 商品id */
  readonly shoppingGoodsId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 商城商品 分页查询返回 */
export type ShoppingGoodsList = {
  readonly __typename?: "ShoppingGoodsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ShoppingGoods>>>;
};

export type ShoppingGoodsSaveIn = {
  /** 商品编码(原厂) */
  readonly barCode?: Maybe<Scalars["String"]>;
  /** 商品品牌名称 */
  readonly brandName?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 商品分类id */
  readonly dataDictionarySystemId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 商品详情 */
  readonly details?: Maybe<Scalars["String"]>;
  /** 第三方url地址 */
  readonly externalUrl?: Maybe<Scalars["String"]>;
  /** 商品名称 */
  readonly goodsName?: Maybe<Scalars["String"]>;
  /** 商品采购价 */
  readonly goodsPrice?: Maybe<Scalars["Float"]>;
  /** 商品规格 */
  readonly goodsSpec?: Maybe<Scalars["String"]>;
  /** 商品上下架状态 Y上架N下架 */
  readonly goodsStatus?: Maybe<Scalars["String"]>;
  readonly groupShoppingGoodsShoppingGoodsId?: Maybe<
    ReadonlyArray<Maybe<GroupShoppingGoodsSaveIn>>
  >;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 商品来源(stoneTalent, 石分达人; jdong, 京东) */
  readonly originType?: Maybe<Scalars["String"]>;
  /** 库存扣除状态(启用/禁用, Y/N; 当状态为N时，商品不会扣减) */
  readonly reduceEnable?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly shoppingGoodsImageShoppingGoodsId?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoodsImageSaveIn>>
  >;
  readonly shoppingGoodsStockShoppingGoodsId?: Maybe<
    ReadonlyArray<Maybe<ShoppingGoodsStockSaveIn>>
  >;
  /** 单位 */
  readonly shoppingUnit?: Maybe<Scalars["String"]>;
  readonly snatchTreasureShoppingGoodsId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureSaveIn>>
  >;
  /** 标签分隔符 , */
  readonly tags?: Maybe<Scalars["String"]>;
  /** 商品总库存 */
  readonly totalStock?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 商城商品库存变化记录表 */
export type ShoppingGoodsStock = {
  readonly __typename?: "ShoppingGoodsStock";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 商品包id */
  readonly groupShoppingGoodsId?: Maybe<Scalars["String"]>;
  readonly groupShoppingGoodsIdObj?: Maybe<GroupShoppingGoods>;
  /** 采购单id */
  readonly groupShoppingGoodsOrderId?: Maybe<Scalars["String"]>;
  readonly groupShoppingGoodsOrderIdObj?: Maybe<GroupShoppingGoodsOrder>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 业务发生时间 */
  readonly occurrenceTime?: Maybe<Scalars["DateTime"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 出库类型(lottery, 抽奖; shopping, 兑换) */
  readonly saleType?: Maybe<Scalars["String"]>;
  /** 商品id */
  readonly shoppingGoodsId?: Maybe<Scalars["String"]>;
  readonly shoppingGoodsIdObj?: Maybe<ShoppingGoods>;
  /** 业务数量 */
  readonly stockNumber?: Maybe<Scalars["Float"]>;
  /** 库存类型(purchase, 入库; sale, 出库; transferOut, 调拨出; transferIn, 调拨入) */
  readonly stockType?: Maybe<Scalars["String"]>;
  /** 金额小计 */
  readonly totalPrice?: Maybe<Scalars["Float"]>;
  /** 单价金额 */
  readonly unitPrice?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 商城商品库存变化记录表 分页查询返回 */
export type ShoppingGoodsStockList = {
  readonly __typename?: "ShoppingGoodsStockList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ShoppingGoodsStock>>>;
};

export type ShoppingGoodsStockSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 商品包id */
  readonly groupShoppingGoodsId?: Maybe<Scalars["String"]>;
  /** 采购单id */
  readonly groupShoppingGoodsOrderId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 业务发生时间 */
  readonly occurrenceTime?: Maybe<Scalars["DateTime"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 出库类型(lottery, 抽奖; shopping, 兑换) */
  readonly saleType?: Maybe<Scalars["String"]>;
  /** 商品id */
  readonly shoppingGoodsId?: Maybe<Scalars["String"]>;
  /** 业务数量 */
  readonly stockNumber?: Maybe<Scalars["Float"]>;
  /** 库存类型(purchase, 入库; sale, 出库; transferOut, 调拨出; transferIn, 调拨入) */
  readonly stockType?: Maybe<Scalars["String"]>;
  /** 金额小计 */
  readonly totalPrice?: Maybe<Scalars["Float"]>;
  /** 单价金额 */
  readonly unitPrice?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 根据订单号设备支付 */
export type ShouhuojiyunOrderIn = {
  readonly orderId: Scalars["String"];
};

/** 支付结果 */
export type ShouhuojiyunOrderOut = {
  readonly __typename?: "ShouhuojiyunOrderOut";
  readonly id?: Maybe<Scalars["String"]>;
  /** 成功返回success */
  readonly msg?: Maybe<Scalars["String"]>;
  readonly orderId?: Maybe<Scalars["String"]>;
};

/** 货柜自动订单积分扣减 */
export type ShouhuojiyunPoints = {
  readonly __typename?: "ShouhuojiyunPoints";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** redis消息id */
  readonly msgId?: Maybe<Scalars["String"]>;
  /** 状态 */
  readonly orderApiStatus?: Maybe<Scalars["String"]>;
  /** 第三方编码 */
  readonly orderCode?: Maybe<Scalars["String"]>;
  /** order返回数据 */
  readonly orderData?: Maybe<Scalars["JSONObject"]>;
  /** order_id */
  readonly orderId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 其他 */
  readonly other?: Maybe<Scalars["JSONObject"]>;
  /** 支付通知返回参数 */
  readonly payApiData?: Maybe<Scalars["JSONObject"]>;
  /** 支付通知参数 */
  readonly payApiParam?: Maybe<Scalars["JSONObject"]>;
  /** 支付通知状态 */
  readonly payApiStatus?: Maybe<Scalars["String"]>;
  /** 第三方编码 */
  readonly payCode?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 积分 */
  readonly totalPoint?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 货柜自动订单积分扣减 分页查询返回 */
export type ShouhuojiyunPointsList = {
  readonly __typename?: "ShouhuojiyunPointsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<ShouhuojiyunPoints>>>;
};

export type ShouhuojiyunPointsSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** redis消息id */
  readonly msgId?: Maybe<Scalars["String"]>;
  /** 状态 */
  readonly orderApiStatus?: Maybe<Scalars["String"]>;
  /** 第三方编码 */
  readonly orderCode?: Maybe<Scalars["String"]>;
  /** order返回数据 */
  readonly orderData?: Maybe<Scalars["JSONObject"]>;
  /** order_id */
  readonly orderId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 其他 */
  readonly other?: Maybe<Scalars["JSONObject"]>;
  /** 支付通知返回参数 */
  readonly payApiData?: Maybe<Scalars["JSONObject"]>;
  /** 支付通知参数 */
  readonly payApiParam?: Maybe<Scalars["JSONObject"]>;
  /** 支付通知状态 */
  readonly payApiStatus?: Maybe<Scalars["String"]>;
  /** 第三方编码 */
  readonly payCode?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 积分 */
  readonly totalPoint?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 签到标签管理(分类知识) */
export type SignInLabel = {
  readonly __typename?: "SignInLabel";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 内容 */
  readonly context?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 标题 */
  readonly label?: Maybe<Scalars["String"]>;
  /** 日 */
  readonly monthDay?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 垃圾类型(recyclable, 可回收垃圾; kitchen, 厨余垃圾; other, 其他垃圾; harmfulWaste, 有害垃圾) */
  readonly recycleType?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly signInRecordSignInLabelId?: Maybe<
    ReadonlyArray<Maybe<SignInRecord>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 签到标签管理(分类知识) */
export type SignInLabelSignInRecordSignInLabelIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 签到标签管理(分类知识) 分页查询返回 */
export type SignInLabelList = {
  readonly __typename?: "SignInLabelList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<SignInLabel>>>;
};

export type SignInLabelSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 内容 */
  readonly context?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 标题 */
  readonly label?: Maybe<Scalars["String"]>;
  /** 日 */
  readonly monthDay?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 垃圾类型(recyclable, 可回收垃圾; kitchen, 厨余垃圾; other, 其他垃圾; harmfulWaste, 有害垃圾) */
  readonly recycleType?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly signInRecordSignInLabelId?: Maybe<
    ReadonlyArray<Maybe<SignInRecordSaveIn>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 签到记录表 */
export type SignInRecord = {
  readonly __typename?: "SignInRecord";
  /** 签到地址 */
  readonly address?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 纬度 */
  readonly latitude?: Maybe<Scalars["String"]>;
  /** 经度 */
  readonly longitude?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 分类知识ID */
  readonly signInLabelId?: Maybe<Scalars["String"]>;
  readonly signInLabelIdObj?: Maybe<SignInLabel>;
  readonly signInSharedSignInRecordId?: Maybe<
    ReadonlyArray<Maybe<SignInShared>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 星期 */
  readonly weekDay?: Maybe<Scalars["String"]>;
};

/** 签到记录表 */
export type SignInRecordSignInSharedSignInRecordIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 签到记录表 分页查询返回 */
export type SignInRecordList = {
  readonly __typename?: "SignInRecordList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<SignInRecord>>>;
};

export type SignInRecordSaveIn = {
  /** 签到地址 */
  readonly address?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 纬度 */
  readonly latitude?: Maybe<Scalars["String"]>;
  /** 经度 */
  readonly longitude?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 分类知识ID */
  readonly signInLabelId?: Maybe<Scalars["String"]>;
  readonly signInSharedSignInRecordId?: Maybe<
    ReadonlyArray<Maybe<SignInSharedSaveIn>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 星期 */
  readonly weekDay?: Maybe<Scalars["String"]>;
};

/** 签到分享记录 */
export type SignInShared = {
  readonly __typename?: "SignInShared";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 签到记录ID */
  readonly signInRecordId?: Maybe<Scalars["String"]>;
  readonly signInRecordIdObj?: Maybe<SignInRecord>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 签到分享记录 分页查询返回 */
export type SignInSharedList = {
  readonly __typename?: "SignInSharedList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<SignInShared>>>;
};

export type SignInSharedSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 签到记录ID */
  readonly signInRecordId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 短信 */
export type Sms = {
  readonly __typename?: "Sms";
  /** 业务编码(verificationCode 验证码，message 消息通知) */
  readonly bizCode?: Maybe<Scalars["String"]>;
  /** 发送回执ID，可根据该ID在接口QuerySendDetails中查询具体的发送状态。 */
  readonly bizId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 请求状态码。返回OK代表请求成功。其他错误码详见错误码列表。 */
  readonly code?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 运营商短信状态码。短信发送成功：DELIVERED。短信发送失败：失败错误码请参考错误码文档。 */
  readonly dtoErrCode?: Maybe<Scalars["String"]>;
  /** 短信接收日期和时间。 */
  readonly dtoReceiveDate?: Maybe<Scalars["DateTime"]>;
  /** 短信发送日期 */
  readonly dtoSendDate?: Maybe<Scalars["DateTime"]>;
  /** 短信发送状态，包括：0系统默认 1：等待回执。2：发送失败。3：发送成功。 */
  readonly dtoSendStatus?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 状态码的描述 */
  readonly message?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 手机号 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** querysenddetails 时间 */
  readonly queryTime?: Maybe<Scalars["DateTime"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 请求id */
  readonly requestId?: Maybe<Scalars["String"]>;
  /** 短信发送日期 */
  readonly sendDate?: Maybe<Scalars["DateTime"]>;
  /** 短信签名名称。请在控制台签名管理页面签名名称一列查看。 */
  readonly signName?: Maybe<Scalars["String"]>;
  /** 短信模板ID。请在控制台模板管理页面模板CODE一列查看。 */
  readonly templateCode?: Maybe<Scalars["String"]>;
  /** 短信模板变量对应的实际值，JSON格式。 */
  readonly templateParam?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 短信 分页查询返回 */
export type SmsList = {
  readonly __typename?: "SmsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<Sms>>>;
};

export type SmsSaveIn = {
  /** 业务编码(verificationCode 验证码，message 消息通知) */
  readonly bizCode?: Maybe<Scalars["String"]>;
  /** 发送回执ID，可根据该ID在接口QuerySendDetails中查询具体的发送状态。 */
  readonly bizId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 请求状态码。返回OK代表请求成功。其他错误码详见错误码列表。 */
  readonly code?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 运营商短信状态码。短信发送成功：DELIVERED。短信发送失败：失败错误码请参考错误码文档。 */
  readonly dtoErrCode?: Maybe<Scalars["String"]>;
  /** 短信接收日期和时间。 */
  readonly dtoReceiveDate?: Maybe<Scalars["DateTime"]>;
  /** 短信发送日期 */
  readonly dtoSendDate?: Maybe<Scalars["DateTime"]>;
  /** 短信发送状态，包括：0系统默认 1：等待回执。2：发送失败。3：发送成功。 */
  readonly dtoSendStatus?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 状态码的描述 */
  readonly message?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 手机号 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** querysenddetails 时间 */
  readonly queryTime?: Maybe<Scalars["DateTime"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 请求id */
  readonly requestId?: Maybe<Scalars["String"]>;
  /** 短信发送日期 */
  readonly sendDate?: Maybe<Scalars["DateTime"]>;
  /** 短信签名名称。请在控制台签名管理页面签名名称一列查看。 */
  readonly signName?: Maybe<Scalars["String"]>;
  /** 短信模板ID。请在控制台模板管理页面模板CODE一列查看。 */
  readonly templateCode?: Maybe<Scalars["String"]>;
  /** 短信模板变量对应的实际值，JSON格式。 */
  readonly templateParam?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分夺宝自动开奖记录 */
export type SnatchLotteryRunLog = {
  readonly __typename?: "SnatchLotteryRunLog";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 夺宝记录ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分夺宝自动开奖记录 分页查询返回 */
export type SnatchLotteryRunLogList = {
  readonly __typename?: "SnatchLotteryRunLogList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<SnatchLotteryRunLog>>>;
};

export type SnatchLotteryRunLogSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 夺宝记录ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分夺宝数据 */
export type SnatchTreasure = {
  readonly __typename?: "SnatchTreasure";
  /** 自动发布(Y/N) */
  readonly autoPublish?: Maybe<Scalars["String"]>;
  /** 自动发布时间 */
  readonly autoPublishTime?: Maybe<Scalars["DateTime"]>;
  /** 中奖号码 */
  readonly bingoTicket?: Maybe<Scalars["JSONObject"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 募集完成时间 */
  readonly completeTime?: Maybe<Scalars["DateTime"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 商品包ID */
  readonly groupGoodsId?: Maybe<Scalars["String"]>;
  readonly groupGoodsIdObj?: Maybe<GroupShoppingGoods>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 开奖日(today, 当日; tomorrow, 次日) */
  readonly lotteryDate?: Maybe<Scalars["String"]>;
  /** 夺宝价 */
  readonly lotteryPrice?: Maybe<Scalars["Float"]>;
  /** 实际开奖时间 */
  readonly lotteryRunTime?: Maybe<Scalars["DateTime"]>;
  /** 开奖时间(时分秒) */
  readonly lotteryTime?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 人数 */
  readonly personTimes?: Maybe<Scalars["Float"]>;
  /** 夺宝状态(preparation, 待发布; running, 进行中; complete, 待开奖; finished, 已开奖; closed, 已下线) */
  readonly recordStatus?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 排列5 */
  readonly rondom5?: Maybe<Scalars["String"]>;
  /** 商品售价 */
  readonly salePrice?: Maybe<Scalars["Float"]>;
  /** 商品ID */
  readonly shoppingGoodsId?: Maybe<Scalars["String"]>;
  readonly shoppingGoodsIdObj?: Maybe<ShoppingGoods>;
  readonly snatchTreasureRecordSnatchTreasureId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureRecord>>
  >;
  readonly snatchTreasureSharedSnatchTreasureId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureShared>>
  >;
  readonly snatchTreasureTicketSnatchTreasureId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureTicket>>
  >;
  readonly snatchTreasureUserSnatchTreasureId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureUser>>
  >;
  /** 夺宝达标人次 */
  readonly ticketNeed?: Maybe<Scalars["Float"]>;
  /** 人次 */
  readonly totalTimes?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分夺宝数据 */
export type SnatchTreasureSnatchTreasureRecordSnatchTreasureIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 石分夺宝数据 */
export type SnatchTreasureSnatchTreasureSharedSnatchTreasureIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 石分夺宝数据 */
export type SnatchTreasureSnatchTreasureTicketSnatchTreasureIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 石分夺宝数据 */
export type SnatchTreasureSnatchTreasureUserSnatchTreasureIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 石分夺宝数据 分页查询返回 */
export type SnatchTreasureList = {
  readonly __typename?: "SnatchTreasureList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<SnatchTreasure>>>;
};

/** 石分夺宝奖券数据 */
export type SnatchTreasureRecord = {
  readonly __typename?: "SnatchTreasureRecord";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 消耗石分宝数量 */
  readonly costScore?: Maybe<Scalars["Float"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 夺宝号来源(score_buy, 石分宝购买; share_reward, 分享奖励; video_reward, 视频奖励) */
  readonly originType?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 夺宝数据ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  readonly snatchTreasureIdObj?: Maybe<SnatchTreasure>;
  readonly snatchTreasureTicketSnatchRecordId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureTicket>>
  >;
  /** 夺宝号购买次数 */
  readonly ticketCount?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分夺宝奖券数据 */
export type SnatchTreasureRecordSnatchTreasureTicketSnatchRecordIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 石分夺宝奖券数据 分页查询返回 */
export type SnatchTreasureRecordList = {
  readonly __typename?: "SnatchTreasureRecordList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<SnatchTreasureRecord>>>;
};

export type SnatchTreasureRecordSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 消耗石分宝数量 */
  readonly costScore?: Maybe<Scalars["Float"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 夺宝号来源(score_buy, 石分宝购买; share_reward, 分享奖励; video_reward, 视频奖励) */
  readonly originType?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 夺宝数据ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  readonly snatchTreasureTicketSnatchRecordId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureTicketSaveIn>>
  >;
  /** 夺宝号购买次数 */
  readonly ticketCount?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type SnatchTreasureSaveIn = {
  /** 自动发布(Y/N) */
  readonly autoPublish?: Maybe<Scalars["String"]>;
  /** 自动发布时间 */
  readonly autoPublishTime?: Maybe<Scalars["DateTime"]>;
  /** 中奖号码 */
  readonly bingoTicket?: Maybe<Scalars["JSONObject"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 募集完成时间 */
  readonly completeTime?: Maybe<Scalars["DateTime"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 商品包ID */
  readonly groupGoodsId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 开奖日(today, 当日; tomorrow, 次日) */
  readonly lotteryDate?: Maybe<Scalars["String"]>;
  /** 夺宝价 */
  readonly lotteryPrice?: Maybe<Scalars["Float"]>;
  /** 实际开奖时间 */
  readonly lotteryRunTime?: Maybe<Scalars["DateTime"]>;
  /** 开奖时间(时分秒) */
  readonly lotteryTime?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 人数 */
  readonly personTimes?: Maybe<Scalars["Float"]>;
  /** 夺宝状态(preparation, 待发布; running, 进行中; complete, 待开奖; finished, 已开奖; closed, 已下线) */
  readonly recordStatus?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 排列5 */
  readonly rondom5?: Maybe<Scalars["String"]>;
  /** 商品售价 */
  readonly salePrice?: Maybe<Scalars["Float"]>;
  /** 商品ID */
  readonly shoppingGoodsId?: Maybe<Scalars["String"]>;
  readonly snatchTreasureRecordSnatchTreasureId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureRecordSaveIn>>
  >;
  readonly snatchTreasureSharedSnatchTreasureId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureSharedSaveIn>>
  >;
  readonly snatchTreasureTicketSnatchTreasureId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureTicketSaveIn>>
  >;
  readonly snatchTreasureUserSnatchTreasureId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureUserSaveIn>>
  >;
  /** 夺宝达标人次 */
  readonly ticketNeed?: Maybe<Scalars["Float"]>;
  /** 人次 */
  readonly totalTimes?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分夺宝奖券数据 */
export type SnatchTreasureShared = {
  readonly __typename?: "SnatchTreasureShared";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 邀请人, 推荐人{appUser} */
  readonly introductId?: Maybe<Scalars["String"]>;
  /** 邀请人, 推荐人{appUser} */
  readonly introductIdObj?: Maybe<AppUser>;
  /** 被邀请人ID{appUser} */
  readonly inviteesId?: Maybe<Scalars["String"]>;
  /** 被邀请人ID{appUser} */
  readonly inviteesIdObj?: Maybe<AppUser>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 夺宝数据ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  readonly snatchTreasureIdObj?: Maybe<SnatchTreasure>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分夺宝奖券数据 分页查询返回 */
export type SnatchTreasureSharedList = {
  readonly __typename?: "SnatchTreasureSharedList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<SnatchTreasureShared>>>;
};

export type SnatchTreasureSharedSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 邀请人, 推荐人{appUser} */
  readonly introductId?: Maybe<Scalars["String"]>;
  /** 被邀请人ID{appUser} */
  readonly inviteesId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 夺宝数据ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type SnatchTreasureStatOut = {
  readonly __typename?: "SnatchTreasureStatOut";
  readonly personTimes?: Maybe<Scalars["Int"]>;
  readonly totalTimes?: Maybe<Scalars["Int"]>;
};

/** 石分夺宝奖券数据 */
export type SnatchTreasureTicket = {
  readonly __typename?: "SnatchTreasureTicket";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 消耗石分宝数量 */
  readonly costScore?: Maybe<Scalars["Float"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 毫秒时间, 计算奖品时使用 */
  readonly milliseconds?: Maybe<Scalars["Float"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 夺宝号来源(score_buy, 石分宝购买; share_reward, 分享奖励; video_reward, 视频奖励) */
  readonly originType?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 夺宝记录ID */
  readonly snatchRecordId?: Maybe<Scalars["String"]>;
  readonly snatchRecordIdObj?: Maybe<SnatchTreasureRecord>;
  /** 夺宝数据ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  readonly snatchTreasureIdObj?: Maybe<SnatchTreasure>;
  /** 夺宝号码 */
  readonly ticket?: Maybe<Scalars["String"]>;
  /** 中奖状态(Y/N) */
  readonly ticketStatus?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly trackingOrderId?: Maybe<Scalars["String"]>;
  readonly trackingOrderIdObj?: Maybe<TrackingOrder>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分夺宝奖券数据 分页查询返回 */
export type SnatchTreasureTicketList = {
  readonly __typename?: "SnatchTreasureTicketList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<SnatchTreasureTicket>>>;
};

export type SnatchTreasureTicketSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 消耗石分宝数量 */
  readonly costScore?: Maybe<Scalars["Float"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 毫秒时间, 计算奖品时使用 */
  readonly milliseconds?: Maybe<Scalars["Float"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 夺宝号来源(score_buy, 石分宝购买; share_reward, 分享奖励; video_reward, 视频奖励) */
  readonly originType?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 夺宝记录ID */
  readonly snatchRecordId?: Maybe<Scalars["String"]>;
  /** 夺宝数据ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  /** 夺宝号码 */
  readonly ticket?: Maybe<Scalars["String"]>;
  /** 中奖状态(Y/N) */
  readonly ticketStatus?: Maybe<Scalars["String"]>;
  /** 订单ID */
  readonly trackingOrderId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分夺宝用户参与记录 */
export type SnatchTreasureUser = {
  readonly __typename?: "SnatchTreasureUser";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 夺宝数据ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  readonly snatchTreasureIdObj?: Maybe<SnatchTreasure>;
  /** 中奖状态(Y/N) */
  readonly ticketStatus?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分夺宝用户参与记录 分页查询返回 */
export type SnatchTreasureUserList = {
  readonly __typename?: "SnatchTreasureUserList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<SnatchTreasureUser>>>;
};

export type SnatchTreasureUserSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 夺宝数据ID */
  readonly snatchTreasureId?: Maybe<Scalars["String"]>;
  /** 中奖状态(Y/N) */
  readonly ticketStatus?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分宝账户变更记录 */
export type StoneAccountRecord = {
  readonly __typename?: "StoneAccountRecord";
  /** 帐期 */
  readonly accountPeriod?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 数值 */
  readonly fraction?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 操作方式(reward, 发放; recharge, 充值; system, 系统补偿) */
  readonly operatorCode?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 充值金额 */
  readonly rechargeNum?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 账户ID */
  readonly stoneAccountId?: Maybe<Scalars["String"]>;
  readonly stoneAccountIdObj?: Maybe<StoneScoreAccount>;
  readonly stoneAccountRecordImageAccountRecordId?: Maybe<
    ReadonlyArray<Maybe<StoneAccountRecordImage>>
  >;
  readonly stoneScoreRewardDetailsAccountRecordId?: Maybe<
    ReadonlyArray<Maybe<StoneScoreRewardDetails>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 用户数量 */
  readonly userCount?: Maybe<Scalars["Float"]>;
};

/** 石分宝账户变更记录 */
export type StoneAccountRecordStoneAccountRecordImageAccountRecordIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 石分宝账户变更记录 */
export type StoneAccountRecordStoneScoreRewardDetailsAccountRecordIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 石分宝账户充值凭证 */
export type StoneAccountRecordImage = {
  readonly __typename?: "StoneAccountRecordImage";
  /** 充值记录id */
  readonly accountRecordId?: Maybe<Scalars["String"]>;
  readonly accountRecordIdObj?: Maybe<StoneAccountRecord>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分宝账户充值凭证 分页查询返回 */
export type StoneAccountRecordImageList = {
  readonly __typename?: "StoneAccountRecordImageList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<StoneAccountRecordImage>>>;
};

export type StoneAccountRecordImageSaveIn = {
  /** 充值记录id */
  readonly accountRecordId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 排序 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分宝账户变更记录 分页查询返回 */
export type StoneAccountRecordList = {
  readonly __typename?: "StoneAccountRecordList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<StoneAccountRecord>>>;
};

export type StoneAccountRecordSaveIn = {
  /** 帐期 */
  readonly accountPeriod?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 数值 */
  readonly fraction?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 操作方式(reward, 发放; recharge, 充值; system, 系统补偿) */
  readonly operatorCode?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 充值金额 */
  readonly rechargeNum?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 账户ID */
  readonly stoneAccountId?: Maybe<Scalars["String"]>;
  readonly stoneAccountRecordImageAccountRecordId?: Maybe<
    ReadonlyArray<Maybe<StoneAccountRecordImageSaveIn>>
  >;
  readonly stoneScoreRewardDetailsAccountRecordId?: Maybe<
    ReadonlyArray<Maybe<StoneScoreRewardDetailsSaveIn>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 用户数量 */
  readonly userCount?: Maybe<Scalars["Float"]>;
};

/** 石分宝账户对应小区关系表 */
export type StoneAccountResidential = {
  readonly __typename?: "StoneAccountResidential";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  readonly residentialIdObj?: Maybe<AddressLibrary>;
  /** 石分宝账户ID */
  readonly scoreAccountId?: Maybe<Scalars["String"]>;
  readonly scoreAccountIdObj?: Maybe<StoneScoreAccount>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分宝账户对应小区关系表 分页查询返回 */
export type StoneAccountResidentialList = {
  readonly __typename?: "StoneAccountResidentialList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<StoneAccountResidential>>>;
};

export type StoneAccountResidentialSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  /** 石分宝账户ID */
  readonly scoreAccountId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分宝、达人值变更记录 */
export type StoneScore = {
  readonly __typename?: "StoneScore";
  /** 所属的石分宝总账户ID(石分宝加分时, 扣除总账户石分宝) */
  readonly accountRecordId?: Maybe<Scalars["String"]>;
  readonly accountRecordIdObj?: Maybe<StoneScoreAccount>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 日期(YYYY-MM-DD) */
  readonly date?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 所得达人值 */
  readonly experience?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 来源(system, 系统补偿; lottery, 抽奖; cash, 兑换; invite, 邀请; complete, 完善信息; read, 阅读文章; signIn, 签到; shard, 分享; upvote, 社区助力; jdExchange, 京东兑换; comment, 社区发言; inhaCash, 居民卡兑换) */
  readonly originType?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 所得石分宝 */
  readonly score?: Maybe<Scalars["Float"]>;
  readonly stoneScoreRelationStoneScoreId?: Maybe<
    ReadonlyArray<Maybe<StoneScoreRelation>>
  >;
  /** 时间(HH:mm:ss) */
  readonly time?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分宝、达人值变更记录 */
export type StoneScoreStoneScoreRelationStoneScoreIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 石分宝账户 */
export type StoneScoreAccount = {
  readonly __typename?: "StoneScoreAccount";
  /** 标题 */
  readonly addressLibraryId?: Maybe<Scalars["String"]>;
  readonly addressLibraryIdObj?: Maybe<AddressLibrary>;
  /** 类别(province 省，city 市，area 区，street 街道，community 社区，residential 小区) */
  readonly addressType?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 负责人 */
  readonly dutyPerson?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 允许超支启用/禁用(Y/N) */
  readonly overspendAble?: Maybe<Scalars["String"]>;
  /** 电话 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 所得石分宝 */
  readonly score?: Maybe<Scalars["Float"]>;
  /** 账户状态(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  readonly stoneAccountRecordStoneAccountId?: Maybe<
    ReadonlyArray<Maybe<StoneAccountRecord>>
  >;
  readonly stoneAccountResidentialScoreAccountId?: Maybe<
    ReadonlyArray<Maybe<StoneAccountResidential>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分宝账户 */
export type StoneScoreAccountStoneAccountRecordStoneAccountIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 石分宝账户 */
export type StoneScoreAccountStoneAccountResidentialScoreAccountIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 石分宝账户 分页查询返回 */
export type StoneScoreAccountList = {
  readonly __typename?: "StoneScoreAccountList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<StoneScoreAccount>>>;
};

export type StoneScoreAccountSaveIn = {
  /** 标题 */
  readonly addressLibraryId?: Maybe<Scalars["String"]>;
  /** 类别(province 省，city 市，area 区，street 街道，community 社区，residential 小区) */
  readonly addressType?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 负责人 */
  readonly dutyPerson?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 允许超支启用/禁用(Y/N) */
  readonly overspendAble?: Maybe<Scalars["String"]>;
  /** 电话 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 所得石分宝 */
  readonly score?: Maybe<Scalars["Float"]>;
  /** 账户状态(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  readonly stoneAccountRecordStoneAccountId?: Maybe<
    ReadonlyArray<Maybe<StoneAccountRecordSaveIn>>
  >;
  readonly stoneAccountResidentialScoreAccountId?: Maybe<
    ReadonlyArray<Maybe<StoneAccountResidentialSaveIn>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分宝、达人值变更记录 分页查询返回 */
export type StoneScoreList = {
  readonly __typename?: "StoneScoreList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<StoneScore>>>;
};

/** 石分宝积分关联表 */
export type StoneScoreRelation = {
  readonly __typename?: "StoneScoreRelation";
  /** 开始时间 */
  readonly beginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 业务数据ID */
  readonly bussinessId?: Maybe<Scalars["String"]>;
  /** 业务表名称() */
  readonly bussinessType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 重试次数 */
  readonly retryTimes?: Maybe<Scalars["Float"]>;
  /** 石分宝积分记录ID */
  readonly stoneScoreId?: Maybe<Scalars["String"]>;
  readonly stoneScoreIdObj?: Maybe<StoneScore>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分宝积分关联表 分页查询返回 */
export type StoneScoreRelationList = {
  readonly __typename?: "StoneScoreRelationList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<StoneScoreRelation>>>;
};

export type StoneScoreRelationSaveIn = {
  /** 开始时间 */
  readonly beginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 业务数据ID */
  readonly bussinessId?: Maybe<Scalars["String"]>;
  /** 业务表名称() */
  readonly bussinessType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly endTime?: Maybe<Scalars["DateTime"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 重试次数 */
  readonly retryTimes?: Maybe<Scalars["Float"]>;
  /** 石分宝积分记录ID */
  readonly stoneScoreId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分宝发放记录 */
export type StoneScoreRewardDetails = {
  readonly __typename?: "StoneScoreRewardDetails";
  /** 发放记录ID */
  readonly accountRecordId?: Maybe<Scalars["String"]>;
  readonly accountRecordIdObj?: Maybe<StoneAccountRecord>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 用户手机号 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 支出石分宝 */
  readonly score?: Maybe<Scalars["Float"]>;
  /** 类型 */
  readonly type?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 石分宝发放记录 分页查询返回 */
export type StoneScoreRewardDetailsList = {
  readonly __typename?: "StoneScoreRewardDetailsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<StoneScoreRewardDetails>>>;
};

export type StoneScoreRewardDetailsSaveIn = {
  /** 发放记录ID */
  readonly accountRecordId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 用户手机号 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 支出石分宝 */
  readonly score?: Maybe<Scalars["Float"]>;
  /** 类型 */
  readonly type?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type StoneScoreSaveIn = {
  /** 所属的石分宝总账户ID(石分宝加分时, 扣除总账户石分宝) */
  readonly accountRecordId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 日期(YYYY-MM-DD) */
  readonly date?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 所得达人值 */
  readonly experience?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 来源(system, 系统补偿; lottery, 抽奖; cash, 兑换; invite, 邀请; complete, 完善信息; read, 阅读文章; signIn, 签到; shard, 分享; upvote, 社区助力; jdExchange, 京东兑换; comment, 社区发言; inhaCash, 居民卡兑换) */
  readonly originType?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 所得石分宝 */
  readonly score?: Maybe<Scalars["Float"]>;
  readonly stoneScoreRelationStoneScoreId?: Maybe<
    ReadonlyArray<Maybe<StoneScoreRelationSaveIn>>
  >;
  /** 时间(HH:mm:ss) */
  readonly time?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 用户等级设置 */
export type StoneTalentLevel = {
  readonly __typename?: "StoneTalentLevel";
  /** 背景颜色起始值 */
  readonly bgcolorBegin?: Maybe<Scalars["String"]>;
  /** 背景颜色结束值 */
  readonly bgcolorEnd?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 达人等级 */
  readonly level?: Maybe<Scalars["Float"]>;
  /** 达人等级名称 */
  readonly levelName?: Maybe<Scalars["String"]>;
  /** 最大值 */
  readonly max?: Maybe<Scalars["Float"]>;
  /** 最小值 */
  readonly min?: Maybe<Scalars["Float"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly stoneTalentLevelEntryStoneLevelId?: Maybe<
    ReadonlyArray<Maybe<StoneTalentLevelEntry>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 用户等级设置 */
export type StoneTalentLevelStoneTalentLevelEntryStoneLevelIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 用户等级奖励说明 */
export type StoneTalentLevelEntry = {
  readonly __typename?: "StoneTalentLevelEntry";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码asc */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 达人等级ID */
  readonly stoneLevelId?: Maybe<Scalars["String"]>;
  readonly stoneLevelIdObj?: Maybe<StoneTalentLevel>;
  /** 说明 */
  readonly textarea?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 用户等级奖励说明 分页查询返回 */
export type StoneTalentLevelEntryList = {
  readonly __typename?: "StoneTalentLevelEntryList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<StoneTalentLevelEntry>>>;
};

export type StoneTalentLevelEntrySaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 达人等级ID */
  readonly stoneLevelId?: Maybe<Scalars["String"]>;
  /** 说明 */
  readonly textarea?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 用户等级设置 分页查询返回 */
export type StoneTalentLevelList = {
  readonly __typename?: "StoneTalentLevelList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<StoneTalentLevel>>>;
};

export type StoneTalentLevelSaveIn = {
  /** 背景颜色起始值 */
  readonly bgcolorBegin?: Maybe<Scalars["String"]>;
  /** 背景颜色结束值 */
  readonly bgcolorEnd?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 文件名 */
  readonly imageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly imagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly imageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly imageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly imageUri?: Maybe<Scalars["String"]>;
  /** 达人等级 */
  readonly level?: Maybe<Scalars["Float"]>;
  /** 达人等级名称 */
  readonly levelName?: Maybe<Scalars["String"]>;
  /** 最大值 */
  readonly max?: Maybe<Scalars["Float"]>;
  /** 最小值 */
  readonly min?: Maybe<Scalars["Float"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  readonly stoneTalentLevelEntryStoneLevelId?: Maybe<
    ReadonlyArray<Maybe<StoneTalentLevelEntrySaveIn>>
  >;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 物流信息记录表 */
export type TrackingOrder = {
  readonly __typename?: "TrackingOrder";
  /** 地址 */
  readonly address?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 发货时间 */
  readonly deliveryTime?: Maybe<Scalars["DateTime"]>;
  /** 商品详情 */
  readonly details?: Maybe<Scalars["String"]>;
  /** 硬编码(同data_dictionary_system.code) */
  readonly goodsCode?: Maybe<Scalars["String"]>;
  /** 数量 */
  readonly goodsCount?: Maybe<Scalars["Float"]>;
  /** 地址 */
  readonly goodsImagePath?: Maybe<Scalars["String"]>;
  /** 域名 */
  readonly goodsImageUri?: Maybe<Scalars["String"]>;
  /** 商品采购价 */
  readonly goodsPrice?: Maybe<Scalars["Float"]>;
  /** 商品规格 */
  readonly goodsSpec?: Maybe<Scalars["String"]>;
  /** 商品类型 */
  readonly goodsType?: Maybe<Scalars["String"]>;
  /** 商品包ID */
  readonly groupGoodsId?: Maybe<Scalars["String"]>;
  /** 商品名称 */
  readonly groupGoodsName?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 区域 */
  readonly location?: Maybe<Scalars["String"]>;
  readonly lotteryDrawRecordTrackingOrderId?: Maybe<
    ReadonlyArray<Maybe<LotteryDrawRecord>>
  >;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 订单状态(perfectAddress, 待完善地址; tobe, 待发货; receiving, 待收货; complete, 已完成; close, 已关闭) */
  readonly orderStatus?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 商品售价 */
  readonly shoppingPrice?: Maybe<Scalars["Float"]>;
  /** 单位 */
  readonly shoppingUnit?: Maybe<Scalars["String"]>;
  readonly snatchTreasureTicketTrackingOrderId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureTicket>>
  >;
  /** 联系电话 */
  readonly telephone?: Maybe<Scalars["String"]>;
  /** 快递单号 */
  readonly trackingNo?: Maybe<Scalars["String"]>;
  readonly trackingOrderLogTrackingOrderId?: Maybe<
    ReadonlyArray<Maybe<TrackingOrderLog>>
  >;
  /** 订单来源(lottery, 石分达人抽奖; cash, 石分达人兑换商城; inhaCash, 社区积分兑换商城; snatchTreasure, 石分夺宝) */
  readonly trackingOrigin?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 更新人id{appUser} */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 更新人id{appUser} */
  readonly updatedIdObj?: Maybe<AppUser>;
  /** 用户名 */
  readonly userName?: Maybe<Scalars["String"]>;
};

/** 物流信息记录表 */
export type TrackingOrderLotteryDrawRecordTrackingOrderIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 物流信息记录表 */
export type TrackingOrderSnatchTreasureTicketTrackingOrderIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 物流信息记录表 */
export type TrackingOrderTrackingOrderLogTrackingOrderIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 物流信息记录表 分页查询返回 */
export type TrackingOrderList = {
  readonly __typename?: "TrackingOrderList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<TrackingOrder>>>;
};

/** 物流信息记录表 */
export type TrackingOrderLog = {
  readonly __typename?: "TrackingOrderLog";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 内容(sended, 已发货; received, 已收货; cancel, 取消订单) */
  readonly content?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 物流订单ID */
  readonly trackingOrderId?: Maybe<Scalars["String"]>;
  readonly trackingOrderIdObj?: Maybe<TrackingOrder>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 物流信息记录表 分页查询返回 */
export type TrackingOrderLogList = {
  readonly __typename?: "TrackingOrderLogList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<TrackingOrderLog>>>;
};

export type TrackingOrderLogSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 内容(sended, 已发货; received, 已收货; cancel, 取消订单) */
  readonly content?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 物流订单ID */
  readonly trackingOrderId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

export type TrackingOrderSaveIn = {
  /** 地址 */
  readonly address?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 发货时间 */
  readonly deliveryTime?: Maybe<Scalars["DateTime"]>;
  /** 商品详情 */
  readonly details?: Maybe<Scalars["String"]>;
  /** 硬编码(同data_dictionary_system.code) */
  readonly goodsCode?: Maybe<Scalars["String"]>;
  /** 数量 */
  readonly goodsCount?: Maybe<Scalars["Float"]>;
  /** 地址 */
  readonly goodsImagePath?: Maybe<Scalars["String"]>;
  /** 域名 */
  readonly goodsImageUri?: Maybe<Scalars["String"]>;
  /** 商品采购价 */
  readonly goodsPrice?: Maybe<Scalars["Float"]>;
  /** 商品规格 */
  readonly goodsSpec?: Maybe<Scalars["String"]>;
  /** 商品类型 */
  readonly goodsType?: Maybe<Scalars["String"]>;
  /** 商品包ID */
  readonly groupGoodsId?: Maybe<Scalars["String"]>;
  /** 商品名称 */
  readonly groupGoodsName?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 区域 */
  readonly location?: Maybe<Scalars["String"]>;
  readonly lotteryDrawRecordTrackingOrderId?: Maybe<
    ReadonlyArray<Maybe<LotteryDrawRecordSaveIn>>
  >;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 订单状态(perfectAddress, 待完善地址; tobe, 待发货; receiving, 待收货; complete, 已完成; close, 已关闭) */
  readonly orderStatus?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 商品售价 */
  readonly shoppingPrice?: Maybe<Scalars["Float"]>;
  /** 单位 */
  readonly shoppingUnit?: Maybe<Scalars["String"]>;
  readonly snatchTreasureTicketTrackingOrderId?: Maybe<
    ReadonlyArray<Maybe<SnatchTreasureTicketSaveIn>>
  >;
  /** 联系电话 */
  readonly telephone?: Maybe<Scalars["String"]>;
  /** 快递单号 */
  readonly trackingNo?: Maybe<Scalars["String"]>;
  readonly trackingOrderLogTrackingOrderId?: Maybe<
    ReadonlyArray<Maybe<TrackingOrderLogSaveIn>>
  >;
  /** 订单来源(lottery, 石分达人抽奖; cash, 石分达人兑换商城; inhaCash, 社区积分兑换商城; snatchTreasure, 石分夺宝) */
  readonly trackingOrigin?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 更新人id{appUser} */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 用户名 */
  readonly userName?: Maybe<Scalars["String"]>;
};

/** 垃圾桶tcp */
export type TrashTcp = {
  readonly __typename?: "TrashTcp";
  /** 发送地址 */
  readonly address?: Maybe<Scalars["String"]>;
  /** 返回报文 */
  readonly backMsg?: Maybe<Scalars["String"]>;
  /** 返回明文报文 */
  readonly backMsgPlaintext?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 报文 */
  readonly msg?: Maybe<Scalars["String"]>;
  /** 明文报文 */
  readonly msgPlaintext?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 垃圾桶tcp 分页查询返回 */
export type TrashTcpList = {
  readonly __typename?: "TrashTcpList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<TrashTcp>>>;
};

export type TrashTcpSaveIn = {
  /** 发送地址 */
  readonly address?: Maybe<Scalars["String"]>;
  /** 返回报文 */
  readonly backMsg?: Maybe<Scalars["String"]>;
  /** 返回明文报文 */
  readonly backMsgPlaintext?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 报文 */
  readonly msg?: Maybe<Scalars["String"]>;
  /** 明文报文 */
  readonly msgPlaintext?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** 点亮值记录表 */
export type UpvoteRecord = {
  readonly __typename?: "UpvoteRecord";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  readonly communityIdObj?: Maybe<AddressLibrary>;
  readonly communityUpvoteActivityUpvoteRecordId?: Maybe<
    ReadonlyArray<Maybe<CommunityUpvoteActivity>>
  >;
  /** 消耗石分宝(0, 10, 50, 100) */
  readonly costScore?: Maybe<Scalars["Float"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 点亮值 */
  readonly upvoteVal?: Maybe<Scalars["Float"]>;
};

/** 点亮值记录表 */
export type UpvoteRecordCommunityUpvoteActivityUpvoteRecordIdArgs = {
  param?: Maybe<QueryListParam>;
};

/** 点亮值记录表 分页查询返回 */
export type UpvoteRecordList = {
  readonly __typename?: "UpvoteRecordList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<UpvoteRecord>>>;
};

export type UpvoteRecordSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  readonly communityUpvoteActivityUpvoteRecordId?: Maybe<
    ReadonlyArray<Maybe<CommunityUpvoteActivitySaveIn>>
  >;
  /** 消耗石分宝(0, 10, 50, 100) */
  readonly costScore?: Maybe<Scalars["Float"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序码 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 点亮值 */
  readonly upvoteVal?: Maybe<Scalars["Float"]>;
};

/** 小程序角色权限区域 */
export type UserPowerLocation = {
  readonly __typename?: "UserPowerLocation";
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  readonly communityIdObj?: Maybe<AddressLibrary>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  readonly residentialIdObj?: Maybe<AddressLibrary>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  readonly streetIdObj?: Maybe<AddressLibrary>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 用户角色权限ID */
  readonly userPowerId?: Maybe<Scalars["String"]>;
  readonly userPowerIdObj?: Maybe<AppUserPower>;
};

/** 小程序角色权限区域 分页查询返回 */
export type UserPowerLocationList = {
  readonly __typename?: "UserPowerLocationList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<UserPowerLocation>>>;
};

export type UserPowerLocationSaveIn = {
  /** 业务编码权限用 */
  readonly businessCode?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 排序 */
  readonly orderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly remark?: Maybe<Scalars["String"]>;
  /** 小区ID */
  readonly residentialId?: Maybe<Scalars["String"]>;
  /** 启用/禁用(Y/N) */
  readonly status?: Maybe<Scalars["String"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 用户角色权限ID */
  readonly userPowerId?: Maybe<Scalars["String"]>;
};

/** VIEW */
export type VAppUser = {
  readonly __typename?: "VAppUser";
  readonly appUserId?: Maybe<Scalars["String"]>;
  readonly appUserIdObj?: Maybe<AppUser>;
  /** 用户状态N停用Y启用 */
  readonly appUserStatus?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  readonly communityIdObj?: Maybe<AddressLibrary>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 创建时间 */
  readonly lastTime?: Maybe<Scalars["DateTime"]>;
  /** 用户昵称 */
  readonly nickName?: Maybe<Scalars["String"]>;
  /** 注册手机号 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** VIEW */
export type VAppUserExpRanking = {
  readonly __typename?: "VAppUserExpRanking";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** wx头像 */
  readonly avatarUrl?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 达人值 */
  readonly experience?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 用户昵称 */
  readonly nickName?: Maybe<Scalars["String"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** VIEW 分页查询返回 */
export type VAppUserExpRankingList = {
  readonly __typename?: "VAppUserExpRankingList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<VAppUserExpRanking>>>;
};

export type VAppUserExpRankingSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** wx头像 */
  readonly avatarUrl?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** 达人值 */
  readonly experience?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 用户昵称 */
  readonly nickName?: Maybe<Scalars["String"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** VIEW 分页查询返回 */
export type VAppUserList = {
  readonly __typename?: "VAppUserList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<VAppUser>>>;
};

export type VAppUserSaveIn = {
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户状态N停用Y启用 */
  readonly appUserStatus?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 创建时间 */
  readonly lastTime?: Maybe<Scalars["DateTime"]>;
  /** 用户昵称 */
  readonly nickName?: Maybe<Scalars["String"]>;
  /** 注册手机号 */
  readonly phone?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** VIEW */
export type VAppUserUpvoteRanking = {
  readonly __typename?: "VAppUserUpvoteRanking";
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly appUserIdObj?: Maybe<AppUser>;
  /** wx头像 */
  readonly avatarUrl?: Maybe<Scalars["String"]>;
  /** 地址名 */
  readonly community?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 用户昵称 */
  readonly nickName?: Maybe<Scalars["String"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 点亮值 */
  readonly upvoteVal?: Maybe<Scalars["Float"]>;
};

/** VIEW 分页查询返回 */
export type VAppUserUpvoteRankingList = {
  readonly __typename?: "VAppUserUpvoteRankingList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<VAppUserUpvoteRanking>>>;
};

export type VAppUserUpvoteRankingSaveIn = {
  /** 用户ID{appUser} */
  readonly appUserId?: Maybe<Scalars["String"]>;
  /** wx头像 */
  readonly avatarUrl?: Maybe<Scalars["String"]>;
  /** 地址名 */
  readonly community?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 用户昵称 */
  readonly nickName?: Maybe<Scalars["String"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 点亮值 */
  readonly upvoteVal?: Maybe<Scalars["Float"]>;
};

/** VIEW */
export type VCommunityUpvoteRanking = {
  readonly __typename?: "VCommunityUpvoteRanking";
  /** 地址名 */
  readonly community?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 点亮值 */
  readonly upvoteVal?: Maybe<Scalars["Float"]>;
};

/** VIEW 分页查询返回 */
export type VCommunityUpvoteRankingList = {
  readonly __typename?: "VCommunityUpvoteRankingList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<VCommunityUpvoteRanking>>>;
};

export type VCommunityUpvoteRankingSaveIn = {
  /** 地址名 */
  readonly community?: Maybe<Scalars["String"]>;
  /** 社区ID */
  readonly communityId?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 街道ID */
  readonly streetId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
  /** 点亮值 */
  readonly upvoteVal?: Maybe<Scalars["Float"]>;
};

/** VIEW */
export type VGroupShoppingGoods = {
  readonly __typename?: "VGroupShoppingGoods";
  /** 商品品牌名称 */
  readonly brandName?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** code硬编码(physicalGoods, 实物; recharge, 充值; stoneScore, 石分宝; experience, 达人值; thanks, 谢谢参与) */
  readonly dictCode?: Maybe<Scalars["String"]>;
  /** 值 */
  readonly dictValue?: Maybe<Scalars["String"]>;
  /** 商品名称 */
  readonly goodsName?: Maybe<Scalars["String"]>;
  /** 商品采购价 */
  readonly goodsPrice?: Maybe<Scalars["Float"]>;
  /** 商品规格 */
  readonly goodsSpec?: Maybe<Scalars["String"]>;
  /** 商品上下架状态 Y上架N下架 */
  readonly goodsStatus?: Maybe<Scalars["String"]>;
  readonly groupGoodsId?: Maybe<Scalars["String"]>;
  /** 商品上下架状态 Y,上架;N,下架 */
  readonly groupGoodsStatus?: Maybe<Scalars["String"]>;
  /** 商品包类型(base, 基础商品包; lottery, 抽奖; shopping, 商城) */
  readonly groupGoodsType?: Maybe<Scalars["String"]>;
  /** 备用字段 */
  readonly groupJsonData?: Maybe<Scalars["JSONObject"]>;
  /** 兑换商品所需级别 */
  readonly groupLevelNeed?: Maybe<Scalars["Float"]>;
  /** 概率抽奖用 */
  readonly groupProbability?: Maybe<Scalars["Float"]>;
  /** 商品售价(根据商品包类型区分) */
  readonly groupShoppingPrice?: Maybe<Scalars["Float"]>;
  /** 库存剩余数量(下单锁库存，支付减库存，取消关闭释放库存) */
  readonly groupShoppingStock?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 库存扣除状态(启用/禁用, Y/N; 当状态为N时，商品不会扣减) */
  readonly reduceEnable?: Maybe<Scalars["String"]>;
  /** 商品详情 */
  readonly shoppingDetails?: Maybe<Scalars["String"]>;
  /** 商品采购价 */
  readonly shoppingPrice?: Maybe<Scalars["Float"]>;
  /** 单位 */
  readonly shoppingUnit?: Maybe<Scalars["String"]>;
  /** 商品总库存 */
  readonly totalStock?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** VIEW 分页查询返回 */
export type VGroupShoppingGoodsList = {
  readonly __typename?: "VGroupShoppingGoodsList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<VGroupShoppingGoods>>>;
};

export type VGroupShoppingGoodsSaveIn = {
  /** 商品品牌名称 */
  readonly brandName?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  /** code硬编码(physicalGoods, 实物; recharge, 充值; stoneScore, 石分宝; experience, 达人值; thanks, 谢谢参与) */
  readonly dictCode?: Maybe<Scalars["String"]>;
  /** 值 */
  readonly dictValue?: Maybe<Scalars["String"]>;
  /** 商品名称 */
  readonly goodsName?: Maybe<Scalars["String"]>;
  /** 商品采购价 */
  readonly goodsPrice?: Maybe<Scalars["Float"]>;
  /** 商品规格 */
  readonly goodsSpec?: Maybe<Scalars["String"]>;
  /** 商品上下架状态 Y上架N下架 */
  readonly goodsStatus?: Maybe<Scalars["String"]>;
  readonly groupGoodsId?: Maybe<Scalars["String"]>;
  /** 商品上下架状态 Y,上架;N,下架 */
  readonly groupGoodsStatus?: Maybe<Scalars["String"]>;
  /** 商品包类型(base, 基础商品包; lottery, 抽奖; shopping, 商城) */
  readonly groupGoodsType?: Maybe<Scalars["String"]>;
  /** 备用字段 */
  readonly groupJsonData?: Maybe<Scalars["JSONObject"]>;
  /** 兑换商品所需级别 */
  readonly groupLevelNeed?: Maybe<Scalars["Float"]>;
  /** 概率抽奖用 */
  readonly groupProbability?: Maybe<Scalars["Float"]>;
  /** 商品售价(根据商品包类型区分) */
  readonly groupShoppingPrice?: Maybe<Scalars["Float"]>;
  /** 库存剩余数量(下单锁库存，支付减库存，取消关闭释放库存) */
  readonly groupShoppingStock?: Maybe<Scalars["Float"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 库存扣除状态(启用/禁用, Y/N; 当状态为N时，商品不会扣减) */
  readonly reduceEnable?: Maybe<Scalars["String"]>;
  /** 商品详情 */
  readonly shoppingDetails?: Maybe<Scalars["String"]>;
  /** 商品采购价 */
  readonly shoppingPrice?: Maybe<Scalars["Float"]>;
  /** 单位 */
  readonly shoppingUnit?: Maybe<Scalars["String"]>;
  /** 商品总库存 */
  readonly totalStock?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** VIEW */
export type VInhaPointsTrackingOrder = {
  readonly __typename?: "VInhaPointsTrackingOrder";
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id{appUser} */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 创建人id{appUser} */
  readonly createdIdObj?: Maybe<AppUser>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 开始时间 */
  readonly inhabitantPointsRelationBeginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly inhabitantPointsRelationBusinessCode?: Maybe<Scalars["String"]>;
  /** 业务数据ID */
  readonly inhabitantPointsRelationBussinessId?: Maybe<Scalars["String"]>;
  /** 业务表名称() */
  readonly inhabitantPointsRelationBussinessType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly inhabitantPointsRelationCreatedAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly inhabitantPointsRelationCreatedId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly inhabitantPointsRelationDeletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly inhabitantPointsRelationDeletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly inhabitantPointsRelationEndTime?: Maybe<Scalars["DateTime"]>;
  readonly inhabitantPointsRelationId?: Maybe<Scalars["String"]>;
  /** 居民卡积分记录ID */
  readonly inhabitantPointsRelationInhaPointsId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly inhabitantPointsRelationOrderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly inhabitantPointsRelationRemark?: Maybe<Scalars["String"]>;
  /** 重试次数 */
  readonly inhabitantPointsRelationRetryTimes?: Maybe<Scalars["Float"]>;
  /** 修改时间 */
  readonly inhabitantPointsRelationUpdatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly inhabitantPointsRelationUpdatedId?: Maybe<Scalars["String"]>;
  /** 帐期 */
  readonly shifenCommunityInhabitantPointsAccountPeriod?: Maybe<
    Scalars["String"]
  >;
  /** 活动编码(system 系统补偿; replace 补卡; luckDraw 抽奖; refuseClass 投放; reward 发放; inhaCash 兑换奖品, exchange: 兑换石分宝; transferFrom, 转移出; transferTo, 转移入) */
  readonly shifenCommunityInhabitantPointsActivityCode?: Maybe<
    Scalars["String"]
  >;
  /** 社区积分账户ID */
  readonly shifenCommunityInhabitantPointsAddressActivityId?: Maybe<
    Scalars["String"]
  >;
  /** 业务编码权限用 */
  readonly shifenCommunityInhabitantPointsBusinessCode?: Maybe<
    Scalars["String"]
  >;
  /** 数值 */
  readonly shifenCommunityInhabitantPointsFraction?: Maybe<Scalars["Float"]>;
  /** 居民卡id */
  readonly shifenCommunityInhabitantPointsInhabitantId?: Maybe<
    Scalars["String"]
  >;
  /** 排序码 */
  readonly shifenCommunityInhabitantPointsOrderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly shifenCommunityInhabitantPointsRemark?: Maybe<Scalars["String"]>;
  /** 地址 */
  readonly trackingOrderAddress?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly trackingOrderAppUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly trackingOrderAppUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly trackingOrderBusinessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly trackingOrderCreatedAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly trackingOrderCreatedId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly trackingOrderDeletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly trackingOrderDeletedId?: Maybe<Scalars["String"]>;
  /** 发货时间 */
  readonly trackingOrderDeliveryTime?: Maybe<Scalars["DateTime"]>;
  /** 商品详情 */
  readonly trackingOrderDetails?: Maybe<Scalars["String"]>;
  /** 硬编码(同data_dictionary_system.code) */
  readonly trackingOrderGoodsCode?: Maybe<Scalars["String"]>;
  /** 数量 */
  readonly trackingOrderGoodsCount?: Maybe<Scalars["Float"]>;
  /** 地址 */
  readonly trackingOrderGoodsImagePath?: Maybe<Scalars["String"]>;
  /** 域名 */
  readonly trackingOrderGoodsImageUri?: Maybe<Scalars["String"]>;
  /** 商品采购价 */
  readonly trackingOrderGoodsPrice?: Maybe<Scalars["Float"]>;
  /** 商品规格 */
  readonly trackingOrderGoodsSpec?: Maybe<Scalars["String"]>;
  /** 商品类型 */
  readonly trackingOrderGoodsType?: Maybe<Scalars["String"]>;
  /** 商品包ID */
  readonly trackingOrderGroupGoodsId?: Maybe<Scalars["String"]>;
  /** 商品名称 */
  readonly trackingOrderGroupGoodsName?: Maybe<Scalars["String"]>;
  readonly trackingOrderId?: Maybe<Scalars["String"]>;
  /** 区域 */
  readonly trackingOrderLocation?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly trackingOrderOrderNo?: Maybe<Scalars["Float"]>;
  /** 订单状态(perfectAddress, 待完善地址; tobe, 待发货; receiving, 待收货; complete, 已完成; close, 已关闭) */
  readonly trackingOrderOrderStatus?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly trackingOrderRemark?: Maybe<Scalars["String"]>;
  /** 商品售价 */
  readonly trackingOrderShoppingPrice?: Maybe<Scalars["Float"]>;
  /** 单位 */
  readonly trackingOrderShoppingUnit?: Maybe<Scalars["String"]>;
  /** 联系电话 */
  readonly trackingOrderTelephone?: Maybe<Scalars["String"]>;
  /** 快递单号 */
  readonly trackingOrderTrackingNo?: Maybe<Scalars["String"]>;
  /** 订单来源(lottery, 石分达人抽奖; cash, 石分达人兑换商城; inhaCash, 社区积分兑换商城;) */
  readonly trackingOrderTrackingOrigin?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly trackingOrderUpdatedAt?: Maybe<Scalars["DateTime"]>;
  /** 更新人id{appUser} */
  readonly trackingOrderUpdatedId?: Maybe<Scalars["String"]>;
  /** 更新人id{appUser} */
  readonly trackingOrderUpdatedIdObj?: Maybe<AppUser>;
  /** 用户名 */
  readonly trackingOrderUserName?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** VIEW 分页查询返回 */
export type VInhaPointsTrackingOrderList = {
  readonly __typename?: "VInhaPointsTrackingOrderList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<VInhaPointsTrackingOrder>>>;
};

/** VIEW */
export type VStoneScoreLottery = {
  readonly __typename?: "VStoneScoreLottery";
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 用户ID{appUser} */
  readonly lotteryDrawRecordAppUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly lotteryDrawRecordAppUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly lotteryDrawRecordBusinessCode?: Maybe<Scalars["String"]>;
  /** 商品规格 */
  readonly lotteryDrawRecordGoodsSpec?: Maybe<Scalars["String"]>;
  /** 奖品名称 */
  readonly lotteryDrawRecordGroupGoodsName?: Maybe<Scalars["String"]>;
  /** 商品包ID */
  readonly lotteryDrawRecordGroupShoppingGoodsId?: Maybe<Scalars["String"]>;
  /** 抽奖所中奖品类型(physicalGoods, 实物奖品, recharge: 充值; stoneScore, 石分宝; experience, 达人值; thanks, 谢谢参与), 谢谢参与以外全部生成订单 */
  readonly lotteryDrawRecordLotteryGoods?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly lotteryDrawRecordOrderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly lotteryDrawRecordRemark?: Maybe<Scalars["String"]>;
  /** 订单Id */
  readonly lotteryDrawRecordTrackingOrderId?: Maybe<Scalars["String"]>;
  /** 所属的石分宝总账户ID(石分宝加分时, 扣除总账户石分宝) */
  readonly stoneScoreAccountRecordId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly stoneScoreAppUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly stoneScoreAppUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly stoneScoreBusinessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly stoneScoreCreatedAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly stoneScoreCreatedId?: Maybe<Scalars["String"]>;
  /** 日期(YYYY-MM-DD) */
  readonly stoneScoreDate?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly stoneScoreDeletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly stoneScoreDeletedId?: Maybe<Scalars["String"]>;
  /** 所得达人值 */
  readonly stoneScoreExperience?: Maybe<Scalars["Float"]>;
  readonly stoneScoreId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly stoneScoreOrderNo?: Maybe<Scalars["Float"]>;
  /** 来源(system, 系统补偿; lottery, 抽奖; cash, 兑换; invite, 邀请; complete, 完善信息; read, 阅读文章; signIn, 签到; shard, 分享; upvote, 社区助力; jdExchange, 京东兑换; comment, 社区发言; inhaCash, 居民卡兑换; inviteComplete, 邀请完善信息) */
  readonly stoneScoreOriginType?: Maybe<Scalars["String"]>;
  /** 开始时间 */
  readonly stoneScoreRelationBeginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly stoneScoreRelationBusinessCode?: Maybe<Scalars["String"]>;
  /** 业务数据ID */
  readonly stoneScoreRelationBussinessId?: Maybe<Scalars["String"]>;
  /** 业务表名称() */
  readonly stoneScoreRelationBussinessType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly stoneScoreRelationCreatedAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly stoneScoreRelationCreatedId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly stoneScoreRelationDeletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly stoneScoreRelationDeletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly stoneScoreRelationEndTime?: Maybe<Scalars["DateTime"]>;
  readonly stoneScoreRelationId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly stoneScoreRelationOrderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly stoneScoreRelationRemark?: Maybe<Scalars["String"]>;
  /** 重试次数 */
  readonly stoneScoreRelationRetryTimes?: Maybe<Scalars["Float"]>;
  /** 石分宝积分记录ID */
  readonly stoneScoreRelationStoneScoreId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly stoneScoreRelationUpdatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly stoneScoreRelationUpdatedId?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly stoneScoreRemark?: Maybe<Scalars["String"]>;
  /** 所得石分宝 */
  readonly stoneScoreScore?: Maybe<Scalars["Float"]>;
  /** 时间(HH:mm:ss) */
  readonly stoneScoreTime?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly stoneScoreUpdatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly stoneScoreUpdatedId?: Maybe<Scalars["String"]>;
  readonly trackingOrderIdObj?: Maybe<TrackingOrder>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** VIEW 分页查询返回 */
export type VStoneScoreLotteryList = {
  readonly __typename?: "VStoneScoreLotteryList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<VStoneScoreLottery>>>;
};

/** VIEW */
export type VStoneScoreSignIn = {
  readonly __typename?: "VStoneScoreSignIn";
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 签到地址 */
  readonly signInRecordAddress?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly signInRecordAppUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly signInRecordAppUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly signInRecordBusinessCode?: Maybe<Scalars["String"]>;
  /** 文件名 */
  readonly signInRecordImageName?: Maybe<Scalars["String"]>;
  /** 路径 */
  readonly signInRecordImagePath?: Maybe<Scalars["String"]>;
  /** 文件大小 */
  readonly signInRecordImageSize?: Maybe<Scalars["Float"]>;
  /** 文件名后缀 */
  readonly signInRecordImageSuffix?: Maybe<Scalars["String"]>;
  /** 域名 默认空，走config的oss url */
  readonly signInRecordImageUri?: Maybe<Scalars["String"]>;
  /** 纬度 */
  readonly signInRecordLatitude?: Maybe<Scalars["String"]>;
  /** 经度 */
  readonly signInRecordLongitude?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly signInRecordOrderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly signInRecordRemark?: Maybe<Scalars["String"]>;
  /** 分类知识ID */
  readonly signInRecordSignInLabelId?: Maybe<Scalars["String"]>;
  /** 星期 */
  readonly signInRecordWeekDay?: Maybe<Scalars["String"]>;
  /** 所属的石分宝总账户ID(石分宝加分时, 扣除总账户石分宝) */
  readonly stoneScoreAccountRecordId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly stoneScoreAppUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly stoneScoreAppUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly stoneScoreBusinessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly stoneScoreCreatedAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly stoneScoreCreatedId?: Maybe<Scalars["String"]>;
  /** 日期(YYYY-MM-DD) */
  readonly stoneScoreDate?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly stoneScoreDeletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly stoneScoreDeletedId?: Maybe<Scalars["String"]>;
  /** 所得达人值 */
  readonly stoneScoreExperience?: Maybe<Scalars["Float"]>;
  readonly stoneScoreId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly stoneScoreOrderNo?: Maybe<Scalars["Float"]>;
  /** 来源(system, 系统补偿; lottery, 抽奖; cash, 兑换; invite, 邀请; complete, 完善信息; read, 阅读文章; signIn, 签到; shard, 分享; upvote, 社区助力; jdExchange, 京东兑换; comment, 社区发言; inhaCash, 居民卡兑换; inviteComplete, 邀请完善信息) */
  readonly stoneScoreOriginType?: Maybe<Scalars["String"]>;
  /** 开始时间 */
  readonly stoneScoreRelationBeginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly stoneScoreRelationBusinessCode?: Maybe<Scalars["String"]>;
  /** 业务数据ID */
  readonly stoneScoreRelationBussinessId?: Maybe<Scalars["String"]>;
  /** 业务表名称() */
  readonly stoneScoreRelationBussinessType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly stoneScoreRelationCreatedAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly stoneScoreRelationCreatedId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly stoneScoreRelationDeletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly stoneScoreRelationDeletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly stoneScoreRelationEndTime?: Maybe<Scalars["DateTime"]>;
  readonly stoneScoreRelationId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly stoneScoreRelationOrderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly stoneScoreRelationRemark?: Maybe<Scalars["String"]>;
  /** 重试次数 */
  readonly stoneScoreRelationRetryTimes?: Maybe<Scalars["Float"]>;
  /** 石分宝积分记录ID */
  readonly stoneScoreRelationStoneScoreId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly stoneScoreRelationUpdatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly stoneScoreRelationUpdatedId?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly stoneScoreRemark?: Maybe<Scalars["String"]>;
  /** 所得石分宝 */
  readonly stoneScoreScore?: Maybe<Scalars["Float"]>;
  /** 时间(HH:mm:ss) */
  readonly stoneScoreTime?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly stoneScoreUpdatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly stoneScoreUpdatedId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** VIEW 分页查询返回 */
export type VStoneScoreSignInList = {
  readonly __typename?: "VStoneScoreSignInList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<VStoneScoreSignIn>>>;
};

/** VIEW */
export type VStoneScoreTrackingOrder = {
  readonly __typename?: "VStoneScoreTrackingOrder";
  /** 创建时间 */
  readonly createdAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly createdId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly deletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly deletedId?: Maybe<Scalars["String"]>;
  readonly id?: Maybe<Scalars["ID"]>;
  /** 所属的石分宝总账户ID(石分宝加分时, 扣除总账户石分宝) */
  readonly stoneScoreAccountRecordId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly stoneScoreAppUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly stoneScoreAppUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly stoneScoreBusinessCode?: Maybe<Scalars["String"]>;
  /** 日期(YYYY-MM-DD) */
  readonly stoneScoreDate?: Maybe<Scalars["String"]>;
  /** 所得达人值 */
  readonly stoneScoreExperience?: Maybe<Scalars["Float"]>;
  /** 排序码 */
  readonly stoneScoreOrderNo?: Maybe<Scalars["Float"]>;
  /** 来源(system, 系统补偿; lottery, 抽奖; cash, 兑换; invite, 邀请; complete, 完善信息; read, 阅读文章; signIn, 签到; shard, 分享; upvote, 社区助力; jdExchange, 京东兑换; comment, 社区发言; inhaCash, 居民卡兑换; inviteComplete, 邀请完善信息) */
  readonly stoneScoreOriginType?: Maybe<Scalars["String"]>;
  /** 开始时间 */
  readonly stoneScoreRelationBeginTime?: Maybe<Scalars["DateTime"]>;
  /** 业务编码权限用 */
  readonly stoneScoreRelationBusinessCode?: Maybe<Scalars["String"]>;
  /** 业务数据ID */
  readonly stoneScoreRelationBussinessId?: Maybe<Scalars["String"]>;
  /** 业务表名称() */
  readonly stoneScoreRelationBussinessType?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly stoneScoreRelationCreatedAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly stoneScoreRelationCreatedId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly stoneScoreRelationDeletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly stoneScoreRelationDeletedId?: Maybe<Scalars["String"]>;
  /** 结束时间 */
  readonly stoneScoreRelationEndTime?: Maybe<Scalars["DateTime"]>;
  readonly stoneScoreRelationId?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly stoneScoreRelationOrderNo?: Maybe<Scalars["Float"]>;
  /** 备注 */
  readonly stoneScoreRelationRemark?: Maybe<Scalars["String"]>;
  /** 重试次数 */
  readonly stoneScoreRelationRetryTimes?: Maybe<Scalars["Float"]>;
  /** 石分宝积分记录ID */
  readonly stoneScoreRelationStoneScoreId?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly stoneScoreRelationUpdatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly stoneScoreRelationUpdatedId?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly stoneScoreRemark?: Maybe<Scalars["String"]>;
  /** 所得石分宝 */
  readonly stoneScoreScore?: Maybe<Scalars["Float"]>;
  /** 时间(HH:mm:ss) */
  readonly stoneScoreTime?: Maybe<Scalars["String"]>;
  /** 地址 */
  readonly trackingOrderAddress?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly trackingOrderAppUserId?: Maybe<Scalars["String"]>;
  /** 用户ID{appUser} */
  readonly trackingOrderAppUserIdObj?: Maybe<AppUser>;
  /** 业务编码权限用 */
  readonly trackingOrderBusinessCode?: Maybe<Scalars["String"]>;
  /** 创建时间 */
  readonly trackingOrderCreatedAt?: Maybe<Scalars["DateTime"]>;
  /** 创建人id */
  readonly trackingOrderCreatedId?: Maybe<Scalars["String"]>;
  /** 删除时间 */
  readonly trackingOrderDeletedAt?: Maybe<Scalars["DateTime"]>;
  /** 删除人id */
  readonly trackingOrderDeletedId?: Maybe<Scalars["String"]>;
  /** 发货时间 */
  readonly trackingOrderDeliveryTime?: Maybe<Scalars["DateTime"]>;
  /** 商品详情 */
  readonly trackingOrderDetails?: Maybe<Scalars["String"]>;
  /** 硬编码(同data_dictionary_system.code) */
  readonly trackingOrderGoodsCode?: Maybe<Scalars["String"]>;
  /** 数量 */
  readonly trackingOrderGoodsCount?: Maybe<Scalars["Float"]>;
  /** 地址 */
  readonly trackingOrderGoodsImagePath?: Maybe<Scalars["String"]>;
  /** 域名 */
  readonly trackingOrderGoodsImageUri?: Maybe<Scalars["String"]>;
  /** 商品采购价 */
  readonly trackingOrderGoodsPrice?: Maybe<Scalars["Float"]>;
  /** 商品规格 */
  readonly trackingOrderGoodsSpec?: Maybe<Scalars["String"]>;
  /** 商品类型 */
  readonly trackingOrderGoodsType?: Maybe<Scalars["String"]>;
  /** 商品包ID */
  readonly trackingOrderGroupGoodsId?: Maybe<Scalars["String"]>;
  /** 商品名称 */
  readonly trackingOrderGroupGoodsName?: Maybe<Scalars["String"]>;
  readonly trackingOrderId?: Maybe<Scalars["String"]>;
  /** 区域 */
  readonly trackingOrderLocation?: Maybe<Scalars["String"]>;
  /** 排序码 */
  readonly trackingOrderOrderNo?: Maybe<Scalars["Float"]>;
  /** 订单状态(perfectAddress, 待完善地址; tobe, 待发货; receiving, 待收货; complete, 已完成; close, 已关闭) */
  readonly trackingOrderOrderStatus?: Maybe<Scalars["String"]>;
  /** 备注 */
  readonly trackingOrderRemark?: Maybe<Scalars["String"]>;
  /** 商品售价 */
  readonly trackingOrderShoppingPrice?: Maybe<Scalars["Float"]>;
  /** 单位 */
  readonly trackingOrderShoppingUnit?: Maybe<Scalars["String"]>;
  /** 联系电话 */
  readonly trackingOrderTelephone?: Maybe<Scalars["String"]>;
  /** 快递单号 */
  readonly trackingOrderTrackingNo?: Maybe<Scalars["String"]>;
  /** 订单来源(lottery, 石分达人抽奖; cash, 石分达人兑换商城; inhaCash, 社区积分兑换商城;) */
  readonly trackingOrderTrackingOrigin?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly trackingOrderUpdatedAt?: Maybe<Scalars["DateTime"]>;
  /** 更新人id{appUser} */
  readonly trackingOrderUpdatedId?: Maybe<Scalars["String"]>;
  /** 更新人id{appUser} */
  readonly trackingOrderUpdatedIdObj?: Maybe<AppUser>;
  /** 用户名 */
  readonly trackingOrderUserName?: Maybe<Scalars["String"]>;
  /** 修改时间 */
  readonly updatedAt?: Maybe<Scalars["DateTime"]>;
  /** 修改人id */
  readonly updatedId?: Maybe<Scalars["String"]>;
};

/** VIEW 分页查询返回 */
export type VStoneScoreTrackingOrderList = {
  readonly __typename?: "VStoneScoreTrackingOrderList";
  readonly count: Scalars["Int"];
  readonly list?: Maybe<ReadonlyArray<Maybe<VStoneScoreTrackingOrder>>>;
};

/** 聚合函数列表 */
export enum AggregateFunctionEnum {
  /** avg(col_name) */
  Avg = "AVG",
  /** concat(col_name,col_name,...) */
  Concat = "CONCAT",
  /** concat_ws(separator,col_name,col_name,…) */
  ConcatWs = "CONCAT_WS",
  /** count(col_name) */
  Count = "COUNT",
  /** croup_concat([DISTINCT] expr [,expr ...][ORDER BY {unsigned_integer | col_name | formula} [ASC | DESC] [,col ...]][SEPARATOR str_val]) */
  GroupConcat = "GROUP_CONCAT",
  /** JSON_ARRAYAGG(col or expr) */
  JsonArrayagg = "JSON_ARRAYAGG",
  /** JSON_OBJECTAGG(key,value) */
  JsonObjectagg = "JSON_OBJECTAGG",
  /** max(col_name) */
  Max = "MAX",
  /** min(col_name) */
  Min = "MIN",
  /** sum(col_name) */
  Sum = "SUM",
}

export type DemoWaterMutationVariables = Exact<{
  param: DemoWaterSaveIn;
}>;

export type DemoWaterMutation = {
  readonly __typename?: "Mutation";
  readonly demoWater?: Maybe<string>;
};
