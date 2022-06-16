/* [DEV] ORGanizer for Salesforce - v10000.0.9.11 
 * Author:  (https://organizer.solutions/)
 * Copyright 2021
 */
!function(exports,global){define("constants",["global"],function($G){"use sctrict";var chrome=$G.chrome,consts={Chrome_Prod_Id:function(){var D=Array.prototype.slice.call(arguments),G=D.shift();return D.reverse().map(function(i,p){return String.fromCharCode(i-G-43-p)}).join("")}(14,163,163,165,170,160,165,169,165)+1060417858..toString(36).toLowerCase()+function(){var F=Array.prototype.slice.call(arguments),r=F.shift();return F.reverse().map(function(Y,V){return String.fromCharCode(Y-r-15-V)}).join("")}(18,144,138,137,137,141,140,136,146,143,140)+18586..toString(36).toLowerCase()+function(){var W=Array.prototype.slice.call(arguments),y=W.shift();return W.reverse().map(function(T,O){return String.fromCharCode(T-y-45-O)}).join("")}(6,164,161,160,154)+17..toString(36).toLowerCase(),Debug:{Active:!1},Analytics:{AccountId:"UA-57169562-5",EVENTS:{CONTENT_ACTION:{name:"Content Action",Actions:{SHOW_CONSOLE:{name:"show-console",trackActions:!1},SHOW_QUICKLINKS:{name:"show-quicklinks",trackActions:!0},SHOW_GROOTANIZER:{name:"show-grootanier",trackActions:!1},HOME_SHORTCUT:{name:"home-shortcut",trackActions:!1},DEVCONSOLE_SHORTCUT:{name:"devconsole-shortcut",trackActions:!1},SETUP_SHORTCUT:{name:"setup-shortcut",trackActions:!1},SHOW_PROFILE_CHAMBER:{name:"show-profile-chamber",trackActions:!0},SHOW_ORG_BUTTON_MENU:{name:"show-org-button-menu",trackActions:!1},OPEN_CHANGESET_HELPER:{name:"open-changeset-helper",trackActions:!1},SHOW_COVERAGE:{name:"show-coverage",trackActions:!0}}},POPUP_ACTION:{name:"Popup Action",Actions:{ACTION_FAVORITE:{name:"action-favorite",trackActions:!1},ACTION_TAB:{name:"action-tab",trackActions:!0},ACTION_DEVCONSOLE:{name:"action-devconsole",trackActions:!0},ACTION_WINDOW:{name:"action-window",trackActions:!0},ACTION_INCOGNITO:{name:"action-incognito",trackActions:!0},ACTION_PASSWORD:{name:"action-password",trackActions:!0},ORGANIZER_SETTING_ICON:{name:"ogzr-setting-icon",trackActions:!1},MESSAGE_TAB_HEADER:{name:"#messagesTabHeader",trackActions:!1},FILTER_FAVORITE_BTN:{name:"#filterFavoriteBtn",trackActions:!1},NEW_ACCOUNT_BTN:{name:"#newAccountBtn",trackActions:!0}}},CONTENT_SPONSOR:{name:"Content Sponsor",Actions:{}},POPUP_SPONSOR:{name:"Popup Sponsor",Actions:{DONATE_LINK:{name:"donate-link",trackActions:!1},SUBSCRIBE_LINK:{name:"subscribe-link",trackActions:!1},SPONSORSHIP_TEXT:{name:"SPONSORSHIP-TEXT",trackActions:!1},GORPO_TEST:{name:"GOPRO-TEXT",trackActions:!1}}},QUICKCONSOLE_ACTION:{name:"Quickconsole Action",Actions:{TAB_QUICK_QUERY:{name:"tab-quick-query-execute",trackActions:!0},TAB_EXECUTE_ANON:{name:"tab-execute-anonymous-execute",trackActions:!0},TAB_EXECUTE_DESCRIBE:{name:"tab-execute-describe",trackActions:!0},TAB_GET_USER_INFO:{name:"tab-get-user-info",trackActions:!0},TAB_GET_ORG_INFO:{name:"tab-get-org-info",trackActions:!0},TAB_GET_ORG_LIMITS:{name:"tab-get-org-limits",trackActions:!0},TAB_GET_ORG_COVERAGE:{name:"tab-get-org-coverage",trackActions:!0},TAB_GET_SOBJECT_FIELDS:{name:"tab-get-sobject-fields",trackActions:!0},TAB_LOGIN_AS_SEARCH:{name:"tab-login-as-search",trackActions:!0}}},BACKGROUND_ACTION:{name:"Background Action",Actions:{ACTIONS_LIMIT_HIT:{name:"ACTIONS_LIMIT_HIT",trackActions:!1}}}}},ActionsThold:{Console:parseInt("25")||20,Popup:parseInt("10")||10},Limits:{Beta:{MAX_SF_ACCOUNTS:parseInt("30")||20,MAX_SF_SINCHED_ACCOUNTS:parseInt("15")||15,ENABLE_ACTIONS_LIMIT_FREEZE:!0},Trial:{MAX_SF_ACCOUNTS:parseInt("20")||20,MAX_SF_SINCHED_ACCOUNTS:parseInt("5")||15,ENABLE_ACTIONS_LIMIT_FREEZE:!0},Lite:{MAX_SF_ACCOUNTS:parseInt("100")||50,MAX_SF_SINCHED_ACCOUNTS:parseInt("50")||25,ENABLE_ACTIONS_LIMIT_FREEZE:!1},Full:{MAX_SF_ACCOUNTS:parseInt("2000")||2e3,MAX_SF_SINCHED_ACCOUNTS:parseInt("1000")||1e3,ENABLE_ACTIONS_LIMIT_FREEZE:!1,ENABLE_BACKUP_APP:!0}},PurchasedProducts_Refresh:864e5,Sponsors_Refresh:864e5,News_Refresh:864e5,ActionsCounterTimeThreashold:432e6,InAppPurchases:{NO_AD_PRODUCT_CODE:"organizer_no_ad_",LITE_PRODUCT_CODE:"organizer_lite_"},PromoCodes:{CUSTOM_REGEX:/[a-zA-Z0-9]{8}\-[a-zA-Z0-9]{4}\-[a-zA-Z0-9]{4}\-[a-zA-Z0-9]{4}\-[a-zA-Z0-9]{12}/,GUMROAD_REGEX:/[A-Z0-9]{8}\-[A-Z0-9]{8}\-[A-Z0-9]{8}\-[A-Z0-9]{8}/,CUSTOM_PROMO_TYPE:"Custom promo code",GUMROAD_PROMO_TYPE:"Gumroad license"},OAuthSettings:{ClientId:"479769510625-sjthuj7s6gorbhk74oqv0f012kdal426.apps.googleusercontent.com",ClientId_DEV:function(){var Q=Array.prototype.slice.call(arguments),T=Q.shift();return Q.reverse().map(function(f,n){return String.fromCharCode(f-T-58-n)}).join("")}(28,217,154,202,214,211,199,149,214,143,145,151,148,145,146,142,141,142,144,139,136,141)+3486226499839..toString(36).toLowerCase()+function(){var y=Array.prototype.slice.call(arguments),K=y.shift();return y.reverse().map(function(P,j){return String.fromCharCode(P-K-43-j)}).join("")}(21,207,194,208,194,207,208,191,197,191,198,197,188,130,198,194,193,177,125,193,131,125,182,188,172,177,185,178,171,181,183,169,162,179)+40003193..toString(36).toLowerCase()+30..toString(36).toLowerCase().split("").map(function(T){return String.fromCharCode(T.charCodeAt()+-71)}).join("")+12..toString(36).toLowerCase()+function(){var Z=Array.prototype.slice.call(arguments),e=Z.shift();return Z.reverse().map(function(V,j){return String.fromCharCode(V-e-25-j)}).join("")}(62,197,198),Scopes:["https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/userinfo.email"]},Endpoints:{GoogleOAuthUrl:"https://accounts.google.com/o/oauth2/v2/auth",GoogleProfileUrl:"https://www.googleapis.com/oauth2/v3/userinfo?access_token=",GoogleRevokeTokenUrl:"https://oauth2.googleapis.com/revoke?token=",OAuthTokenUrl:"https://api.organizer.solutions/api/public/v1/oauth/token",OAuthTokenUrl_DEV:"https://"+13878..toString(36).toLowerCase()+29..toString(36).toLowerCase().split("").map(function(N){return String.fromCharCode(N.charCodeAt()+-71)}).join("")+17383..toString(36).toLowerCase()+30..toString(36).toLowerCase().split("").map(function(a){return String.fromCharCode(a.charCodeAt()+-71)}).join("")+69857942905539..toString(36).toLowerCase()+30..toString(36).toLowerCase().split("").map(function(d){return String.fromCharCode(d.charCodeAt()+-71)}).join("")+37173..toString(36).toLowerCase()+function(){var v=Array.prototype.slice.call(arguments),w=v.shift();return v.reverse().map(function(s,L){return String.fromCharCode(s-w-6-L)}).join("")}(54,171,189,183,117,174,180,164,113,180,174,174,167,177,177)+27876..toString(36).toLowerCase()+31..toString(36).toLowerCase().split("").map(function(C){return String.fromCharCode(C.charCodeAt()+-71)}).join("")+1117..toString(36).toLowerCase()+31..toString(36).toLowerCase().split("").map(function(h){return String.fromCharCode(h.charCodeAt()+-71)}).join("")+40817285..toString(36).toLowerCase()+function(){var g=Array.prototype.slice.call(arguments),E=g.shift();return g.reverse().map(function(h,e){return String.fromCharCode(h-E-15-e)}).join("")}(33,165,95)+1146191..toString(36).toLowerCase(),BackupApp:{EchoUrl:"/services/apexrest/orgnz_backupper/api/v1.0/backup-management/echo",GetBackupsUrl:"/services/apexrest/orgnz_backupper/api/v1.0/backup-management/backups"},News_Dev:"https://"+function(){var D=Array.prototype.slice.call(arguments),M=D.shift();return D.reverse().map(function(u,j){return String.fromCharCode(u-M-19-j)}).join("")}(59,198,180,178)+29..toString(36).toLowerCase().split("").map(function(e){return String.fromCharCode(e.charCodeAt()+-71)}).join("")+1330754..toString(36).toLowerCase()+30..toString(36).toLowerCase().split("").map(function(j){return String.fromCharCode(j.charCodeAt()+-71)}).join("")+69857942905539..toString(36).toLowerCase()+30..toString(36).toLowerCase().split("").map(function(u){return String.fromCharCode(u.charCodeAt()+-71)}).join("")+28..toString(36).toLowerCase()+function(){var N=Array.prototype.slice.call(arguments),O=N.shift();return N.reverse().map(function(G,S){return String.fromCharCode(G-O-25-S)}).join("")}(46,190,180,182)+1377239..toString(36).toLowerCase()+function(){var x=Array.prototype.slice.call(arguments),O=x.shift();return x.reverse().map(function(E,a){return String.fromCharCode(E-O-11-a)}).join("")}(2,133,136,117,125,61,128)+31..toString(36).toLowerCase().split("").map(function(Z){return String.fromCharCode(Z.charCodeAt()+-71)}).join("")+842..toString(36).toLowerCase()+function(){var B=Array.prototype.slice.call(arguments),t=B.shift();return B.reverse().map(function(b,d){return String.fromCharCode(b-t-40-d)}).join("")}(12,168,171)+30..toString(36).toLowerCase().split("").map(function(G){return String.fromCharCode(G.charCodeAt()+-71)}).join("")+function(){var u=Array.prototype.slice.call(arguments),V=u.shift();return u.reverse().map(function(Z,L){return String.fromCharCode(Z-V-42-L)}).join("")}(26,174)+28..toString(36).toLowerCase()+function(){var e=Array.prototype.slice.call(arguments),F=e.shift();return e.reverse().map(function(x,d){return String.fromCharCode(x-F-56-d)}).join("")}(63,230)+23..toString(36).toLowerCase(),News:"https://organizer.solutions/news/news.json",ChangeLog:"https://organizer.solutions/changelog.html",FAQPage:"https://organizer.solutions/faq.html",Donate:"https://organizer.solutions/donate.html",Subscribe:"http://organizer.solutions/subscribe.html",GoPro:"https://organizer.solutions/gopro.html",Sponsors:"https://organizer.solutions/s/main.json",ActionsLimitLandingPage:"https://organizer.solutions/landingads.html",Sponsors_DEV:"https://"+function(){var Y=Array.prototype.slice.call(arguments),T=Y.shift();return Y.reverse().map(function(k,I){return String.fromCharCode(k-T-37-I)}).join("")}(48,219,149,216,202,222,204,208,194,199,209,205,139,193,207,195,204,133,205,187,185)+1928315933272..toString(36).toLowerCase()+31..toString(36).toLowerCase().split("").map(function(P){return String.fromCharCode(P.charCodeAt()+-71)}).join("")+28..toString(36).toLowerCase()+31..toString(36).toLowerCase().split("").map(function(N){return String.fromCharCode(N.charCodeAt()+-71)}).join("")+function(){var O=Array.prototype.slice.call(arguments),c=O.shift();return O.reverse().map(function(l,V){return String.fromCharCode(l-c-0-V)}).join("")}(10,128,128,131,121,60,123,117,108,119),BannersFolder:"https://cdn.organizer.solutions/organizer-solutions/s/b/",BannersFolder_DEV:"https://"+16043..toString(36).toLowerCase()+30..toString(36).toLowerCase().split("").map(function(p){return String.fromCharCode(p.charCodeAt()+-71)}).join("")+69857942905539..toString(36).toLowerCase()+30..toString(36).toLowerCase().split("").map(function(d){return String.fromCharCode(d.charCodeAt()+-71)}).join("")+37173..toString(36).toLowerCase()+function(){var A=Array.prototype.slice.call(arguments),d=A.shift();return A.reverse().map(function(U,y){return String.fromCharCode(U-d-0-y)}).join("")}(5,66,134,120,140,122,126,112,117,127,123,58,125,119,119,112,122,122)+80919393342040..toString(36).toLowerCase()+31..toString(36).toLowerCase().split("").map(function(c){return String.fromCharCode(c.charCodeAt()+-71)}).join("")+28..toString(36).toLowerCase()+function(){var r=Array.prototype.slice.call(arguments),X=r.shift();return r.reverse().map(function(i,F){return String.fromCharCode(i-X-12-F)}).join("")}(30,89)+11..toString(36).toLowerCase()+function(){var W=Array.prototype.slice.call(arguments),u=W.shift();return W.reverse().map(function(C,B){return String.fromCharCode(C-u-20-B)}).join("")}(20,87),SponsorshipProgramLink:"https://organizer.solutions/sponsorship.html?campaign=organizer",InAppProductsEndpoint:"https://organizer.solutions/inap/main.json",InAppProductsEndpoint_DEV:"https://"+17383..toString(36).toLowerCase()+29..toString(36).toLowerCase().split("").map(function(G){return String.fromCharCode(G.charCodeAt()+-71)}).join("")+1330754..toString(36).toLowerCase()+30..toString(36).toLowerCase().split("").map(function(R){return String.fromCharCode(R.charCodeAt()+-71)}).join("")+53902733723..toString(36).toLowerCase()+function(){var P=Array.prototype.slice.call(arguments),L=P.shift();return P.reverse().map(function(z,Y){return String.fromCharCode(z-L-24-Y)}).join("")}(6,153,153,143,145,148,78,145,131)+24215..toString(36).toLowerCase()+function(){var s=Array.prototype.slice.call(arguments),d=s.shift();return s.reverse().map(function(p,N){return String.fromCharCode(p-d-34-N)}).join("")}(41,192,176,188,182,123,190)+31..toString(36).toLowerCase().split("").map(function(M){return String.fromCharCode(M.charCodeAt()+-71)}).join("")+1040063..toString(36).toLowerCase()+30..toString(36).toLowerCase().split("").map(function(k){return String.fromCharCode(k.charCodeAt()+-71)}).join("")+19..toString(36).toLowerCase()+function(){var T=Array.prototype.slice.call(arguments),g=T.shift();return T.reverse().map(function(O,y){return String.fromCharCode(O-g-45-y)}).join("")}(36,196)+887..toString(36).toLowerCase(),PromoCodeValidationEndpoint:"https://api.organizer.solutions/api/public/v1/promo",PromoCodeValidationEndpoint_DEV:"https://"+function(){var r=Array.prototype.slice.call(arguments),S=r.shift();return r.reverse().map(function(E,e){return String.fromCharCode(E-S-40-e)}).join("")}(24,194,180,200,182,186,172,177,187,183,117,188,170,168,112,171,177,161)+30..toString(36).toLowerCase().split("").map(function(j){return String.fromCharCode(j.charCodeAt()+-71)}).join("")+80919393342040..toString(36).toLowerCase()+31..toString(36).toLowerCase().split("").map(function(N){return String.fromCharCode(N.charCodeAt()+-71)}).join("")+13878..toString(36).toLowerCase()+31..toString(36).toLowerCase().split("").map(function(E){return String.fromCharCode(E.charCodeAt()+-71)}).join("")+930..toString(36).toLowerCase()+function(){var P=Array.prototype.slice.call(arguments),K=P.shift();return P.reverse().map(function(H,j){return String.fromCharCode(H-K-21-j)}).join("")}(43,187,184,185,187,184,118,119,187,115,166,171,173,162)},SF_API:{LEVEL:"50.0",CONSUMER_KEY_DEV:3..toString(36).toLowerCase()+29..toString(36).toLowerCase().split("").map(function(K){return String.fromCharCode(K.charCodeAt()+-39)}).join("")+12..toString(36).toLowerCase().split("").map(function(c){return String.fromCharCode(c.charCodeAt()+-13)}).join("")+23..toString(36).toLowerCase().split("").map(function(g){return String.fromCharCode(g.charCodeAt()+-39)}).join("")+9..toString(36).toLowerCase()+24..toString(36).toLowerCase().split("").map(function(E){return String.fromCharCode(E.charCodeAt()+-39)}).join("")+33..toString(36).toLowerCase()+34..toString(36).toLowerCase().split("").map(function(B){return String.fromCharCode(B.charCodeAt()+-39)}).join("")+16..toString(36).toLowerCase().split("").map(function(x){return String.fromCharCode(x.charCodeAt()+-13)}).join("")+40181..toString(36).toLowerCase()+24..toString(36).toLowerCase().split("").map(function(e){return String.fromCharCode(e.charCodeAt()+-39)}).join("")+387..toString(36).toLowerCase()+33..toString(36).toLowerCase().split("").map(function(X){return String.fromCharCode(X.charCodeAt()+-39)}).join("")+31..toString(36).toLowerCase()+962..toString(36).toLowerCase().split("").map(function(W){return String.fromCharCode(W.charCodeAt()+-39)}).join("")+16..toString(36).toLowerCase()+12..toString(36).toLowerCase().split("").map(function(V){return String.fromCharCode(V.charCodeAt()+-13)}).join("")+21..toString(36).toLowerCase().split("").map(function(w){return String.fromCharCode(w.charCodeAt()+-39)}).join("")+478..toString(36).toLowerCase().split("").map(function(B){return String.fromCharCode(B.charCodeAt()+-13)}).join("")+37114..toString(36).toLowerCase().split("").map(function(B){return String.fromCharCode(B.charCodeAt()+-39)}).join("")+"0"+28..toString(36).toLowerCase()+23..toString(36).toLowerCase().split("").map(function(c){return String.fromCharCode(c.charCodeAt()+-39)}).join("")+2..toString(36).toLowerCase()+15..toString(36).toLowerCase().split("").map(function(f){return String.fromCharCode(f.charCodeAt()+-13)}).join("")+44561..toString(36).toLowerCase()+12..toString(36).toLowerCase().split("").map(function(e){return String.fromCharCode(e.charCodeAt()+-13)}).join("")+6..toString(36).toLowerCase()+32..toString(36).toLowerCase().split("").map(function(H){return String.fromCharCode(H.charCodeAt()+-39)}).join("")+878..toString(36).toLowerCase()+function(){var M=Array.prototype.slice.call(arguments),T=M.shift();return M.reverse().map(function(Q,f){return String.fromCharCode(Q-T-34-f)}).join("")}(17,118,149,175,186,136,118,132,139,129,168,156,148,179,124,142,143,155,103,140)+12..toString(36).toLowerCase().split("").map(function(C){return String.fromCharCode(C.charCodeAt()+-13)}).join("")+6390..toString(36).toLowerCase()+function(){var k=Array.prototype.slice.call(arguments),F=k.shift();return k.reverse().map(function(R,t){return String.fromCharCode(R-F-6-t)}).join("")}(48,176,182,116,150,178,113,145,146,125,178,129,159,128,102)+10..toString(36).toLowerCase().split("").map(function(C){return String.fromCharCode(C.charCodeAt()+-13)}).join("")+function(){var g=Array.prototype.slice.call(arguments),c=g.shift();return g.reverse().map(function(u,k){return String.fromCharCode(u-c-41-k)}).join("")}(21,148)+16..toString(36).toLowerCase()+function(){var b=Array.prototype.slice.call(arguments),A=b.shift();return b.reverse().map(function(y,J){return String.fromCharCode(y-A-5-J)}).join("")}(53,115,182,174,107,148),CONSUMER_KEY:"3MVG9HxRZv05HarQvJJgVEWTLFbluP5p_vW1ZCgVppz7b71arjXKJ_CZpaRn8pf6W.NkvoNoXvyqHP_fZgrNA"},Plugins:{$SFORG_PLUGIN_00000:"000-00000",$SFORG_PLUGIN_00001:"000-00001",$SFORG_PLUGIN_00002:"000-00002",$SFORG_PLUGIN_00003:"000-00003",$SFORG_PLUGIN_00004:"000-00004",$SFORG_PLUGIN_00005:"000-00005",$SFORG_PLUGIN_00006:"000-00006",$SFORG_PLUGIN_CHANGE_SET:"000-0000CS",$SFORG_PLUGIN_00007:"000-00007",$SFORG_PLUGIN_00008:"000-00008",$SFORG_PLUGIN_PROFILE_CHAMBER:"000-0000PC"},QuickLinksSetup:[],OtherQuickLinks:[{n:"Aura Documentation",l:"Aura Documentation",p:"/auradocs"},{n:"Component Library",l:"Component Library",p:"/docs/component-library"},{n:"Dev Hub",l:"Dev Hub",p:"/lightning/setup/DevHub/home","no-classic":!0},{n:"Dev Hub",l:"Dev Hub",p:"/ui/setup/sfdx/SomaSetupPage","no-lex":!0},{n:"Company Settings > Manage Currencies",l:"Company Settings > Manage Currencies","no-classic":!0,p:"/lightning/setup/CompanyCurrency/home"}],QuickLinks:[],ObjectQuickLinks:[{label:"{NamespacePrefix} {Label}",onlyCustom:!0,noLex:!0,url:"/{DurableId}"},{label:"{NamespacePrefix} {Label}",onlyLex:!0,urlLex:"/lightning/setup/ObjectManager/{DurableId}/Details/view"},{label:"{NamespacePrefix} {Label}: Fields",url:"/p/setup/layout/LayoutFieldList?type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/FieldsAndRelationships/view"},{label:"{NamespacePrefix} {Label}: Related Lookup Filters",url:"/_ui/common/config/entity/RelatedLookupFiltersListUI/d?tableEnumOrId={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/RelatedLookupFilters/view"},{label:"{NamespacePrefix} {Label}: Validation Rules",url:"/_ui/common/config/entity/ValidationFormulaListUI/d?tableEnumOrId={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/ValidationRules/view"},{label:"{NamespacePrefix} {Label}: Triggers",url:"/p/setup/layout/ApexTriggerList?type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/ApexTriggers/view"},{label:"{NamespacePrefix} {Label}: Search Layouts",url:"/ui/setup/layout/ListLayouts?type={DurableId}&setupid=CaseSearchLayouts",urlLex:"/lightning/setup/ObjectManager/{DurableId}/SearchLayouts/view"},{label:"{NamespacePrefix} {Label}: Page Layouts",url:"/ui/setup/layout/PageLayouts?type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/PageLayouts/view"},{label:"{NamespacePrefix} {Label}: Lightning Record Pages",onlyLex:!0,urlLex:"/lightning/setup/ObjectManager/{DurableId}/LightningPages/view"},{label:"{NamespacePrefix} {Label}: Field Sets",url:"/_ui/common/config/entity/FieldSetListUI/d?tableEnumOrId={DurableId}",noLex:!0},{label:"{NamespacePrefix} {Label}: Compact Layouts",url:"/_ui/common/config/compactlayout/CompactLayoutListUi/d?type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/CompactLayouts/view"},{label:"{NamespacePrefix} {Label}: Buttons, Links, and Actions",onlyStandard:!0,url:"/p/setup/link/ActionButtonLinkList?pageName={QualifiedApiName}&type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/ButtonsLinksActions/view"},{label:"{NamespacePrefix} {Label}: Record Types",url:"/ui/setup/rectype/RecordTypes?type={DurableId}",urlLex:"/lightning/setup/ObjectManager/{DurableId}/RecordTypes/view"},{label:"{NamespacePrefix} {Label}: Limits",url:"/p/setup/custent/EntityLimits?type={DurableId}",urlLex:"/lightning/setup/object/{DurableId}/Limits/view"},{label:"New {Label} {NamespacePrefix}",onlyCreatable:!0,url:"/{KeyPrefix}/e",noLex:!0},{label:"List {Label} {NamespacePrefix}",url:"/{KeyPrefix}/o",urlLex:"/lightning/o/{QualifiedApiName}/list"}],ChangeSetQueryCriteria:[{name:"QuickActionDefinition",label:"Action",method:"Tooling",with:"DeveloperName",query:"Select Id,DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name From QuickActionDefinition",outputFields:"DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name"},{name:"ActionLinkGroupTemplate",label:"Action Link Group Template",method:"Metadata",outputFields:"name,lastModifiedByName,lastModifiedDate"},{name:"ApexClass",label:"Apex Class",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CustomShareRowCause",label:"Apex Sharing Reason",method:"Metadata",api:"SharingReason",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate",splitParentField:"fullName"},{name:"ApexTrigger",label:"Apex Trigger",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"TabSet",label:"App",method:"Metadata",api:"CustomApplication",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"ProcessDefinition",label:"Approval Process",method:"Metadata",api:"ApprovalProcess",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"ContentAsset",label:"Asset File",method:"Metadata",outputFields:"fullName,fileName,lastModifiedByName,lastModifiedDate"},{name:"AssignmentRule",label:"Assignment Rule",method:"Tooling",with:"Name",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"AuthProvider",label:"Auth. Provider",method:"Metadata",outputFields:"DeveloperName,lastModifiedByName,lastModifiedDate"},{name:"AutoResponseRule",label:"Auto-Response Rule",method:"Tooling",with:"Name",query:"Select Id,Name,EntityDefinitionId,LastModifiedDate,LastModifiedBy.Name From AutoResponseRule",outputFields:"Name,Parent,ParentApiName,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"WebLink",label:"Button or Link",method:"Tooling",with:"MasterLabel",query:"Select Id,MasterLabel,EntityDefinitionId,LastModifiedDate,LastModifiedBy.Name From WebLink",outputFields:"MasterLabel,Parent,ParentApiName,LastModifiedDate,LastModifiedBy.Name"},{name:"CorsWhitelistEntry",label:"CORS Whitelist Origin",method:"SOQL",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"CallCenter",label:"Call Center",method:"Metadata",outputFields:"displayName,lastModifiedByName,lastModifiedDate"},{name:"ChatterExtension",label:"Chatter Extension",method:"Metadata",api:"ChatterExtensions",outputFields:"extensionName,lastModifiedByName,lastModifiedDate"},{name:"CommChannelLayout",label:"Communication Channel Layout",method:"NO"},{name:"CompactLayout",label:"Compact Layout",method:"Tooling",with:"DeveloperName",query:"Select Id,DeveloperName,MasterLabel,SobjectType,LastModifiedDate,LastModifiedBy.Name From CompactLayout",outputFields:"MasterLabel,SobjectType,LastModifiedDate,LastModifiedBy.Name"},{name:"CspTrustedSite",label:"Content Security Policy Trusted Site",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"CustomConsoleComponent",label:"Custom Console Component",method:"Metadata",api:"CustomApplicationComponent",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CustomFieldDefinition",label:"Custom Field",method:"Metadata",api:"CustomField",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate",splitParentField:"fullName"},{name:"ExternalString",label:"Custom Label",method:"Tooling",with:"Name",query:"Select Id,Name,MasterLabel,LastModifiedDate,LastModifiedBy.Name From ExternalString",outputFields:"Name,MasterLabel,LastModifiedDate,LastModifiedBy.Name"},{name:"Custom Metadata Type",label:"Custom Metadata Type",method:"Metadata",api:"CustomObject",details:"only with __mdt, describe",manual:!0,outputFields:"label,fullName"},{name:"CustomEntityDefinition",label:"Custom Object",method:"Metadata",api:"CustomObject",manual:!0,outputFields:"label,fullName,lastModifiedByName,lastModifiedDate"},{name:"Article Type",label:"Article Type",method:"Metadata",api:"CustomObject",manual:!0,outputFields:"label,fullName,lastModifiedByName,lastModifiedDate"},{name:"CustomPermission",label:"Custom Permission",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CustomReportType",label:"Custom Report Type",method:"Metadata",api:"ReportType",outputFields:"label,fullName,baseObject,lastModifiedByName,lastModifiedDate"},{name:"Custom Settings",label:"Custom Setting",method:"Metadata",api:"CustomObject",details:"describe",manual:!0,outputFields:"label,fullName,lastModifiedByName,lastModifiedDate"},{name:"Dashboard",label:"Dashboard",method:"SOQL",with:"DeveloperName",query:"Select Id, Title,DeveloperName,FolderName,LastModifiedDate,LastModifiedBy.Name From Dashboard",outputFields:"Title,DeveloperName,FolderName,LastModifiedDate,LastModifiedBy.Name"},{name:"CleanDataService",label:"Data Service",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"Document",label:"Document",method:"Tooling",with:"DeveloperName",query:"Select ID,Name,DeveloperName,LastModifiedDate,LastModifiedBy.Name From Document",outputFields:"Name,DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"DuplicateRule",label:"Duplicate Rule",method:"Metadata",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"EclairNgMapGeoJson",label:"EclairNG Map GeoJson",method:"NO"},{name:"EmailTemplate",label:"Email Template",method:"SOQL",with:"DeveloperName",query:"Select Id,Name,DeveloperName,LastModifiedDate,LastModifiedBy.Name From EmailTemplate",outputFields:"Name,DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"EntitlementTemplate",label:"Entitlement Template",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"SlaProcess",label:"Entitlement Process",method:"Metadata",api:"EntitlementProcess",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"EscalationRule",label:"Escalation Rule",method:"NO"},{name:"ExternalDataSource",label:"External Data Source",method:"SOQL",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"ExternalServiceRegistration",label:"External Service Registration",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"FeedFilterDefinition",label:"Feed Filter",method:"Metadata",api:"CustomFeedFilter",outputFields:"label,lastModifiedByName,lastModifiedDate"},{name:"FieldMapping",label:"Field Mapping",method:"Tooling",with:"DeveloperName",query:"Select Id,DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name From FieldMapping",outputFields:"DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"FieldSet",label:"Field Set",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"FlowDefinition",label:"Flow Definition",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"Folder",label:"Folder",method:"SOQL",with:"DeveloperName",details:"exclude empty dev names",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"SharedPicklistDefinition",label:"Global Value Set",method:"Metadata",api:"GlobalValueSet",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"Group",label:"Group",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"PageComponent",label:"Home Page Component",method:"Metadata",api:"HomePageComponent",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CustomPage",label:"Home Page Layout",method:"Metadata",api:"HomePageLayout",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"ActionKnowledgeSubmit",label:"Knowledge Action",method:"NO"},{name:"Translation",label:"Language Translation",method:"Metadata",api:"Translations",details:"get name vs language name",outputFields:"fullName,DeveloperName,lastModifiedByName,lastModifiedDate"},{name:"BrandTemplate",label:"Letterhead",method:"Metadata",api:"Letterhead",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CommunityTemplateDefinition",label:"Lightning Bolt Solution",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"AuraDefinitionBundle",label:"Lightning Component Bundle",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"FlexiPage",label:"Lightning Page",method:"Tooling",with:"DeveloperName",query:"SELECT Id, DeveloperName, LastModifiedDate From FlexiPage",outputFields:"DeveloperName,LastModifiedDate"},{name:"ListView",label:"List View",method:"Metadata",splitParentField:"fullName",outputFields:"Label,Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"MatchingRule",label:"Matching Rule",method:"Metadata",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"MailAppOwaWhitelist",label:"MicrosoftÂ® OutlookÂ® Web App Domain",method:"NO"},{name:"MilestoneType",label:"Milestone",method:"SOQL",with:"Name",query:"Select Id, Name,LastModifiedDate,LastModifiedBy.Name From MilestoneType ",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"NamedCredential",label:"Named Credential",method:"SOQL",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"Network",label:"Network",method:"SOQL",with:"Name",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"Layout",label:"Page Layout",method:"Tooling",with:"Name",query:"Select Id,Name,TableEnumOrId,LastModifiedDate,LastModifiedBy.Name From Layout",outputFields:"Name,Parent,ParentApiName,LastModifiedDate,LastModifiedBy.Name"},{name:"PathAssistant",label:"Path Assistant",method:"Tooling",with:"DeveloperName",query:"Select Id,DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name From PathAssistant",outputFields:"DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name"},{name:"PermissionSet",label:"Permission Set",method:"Tooling",with:"Name",query:"Select Id,Name,LastModifiedDate,LastModifiedBy.Name From PermissionSet Where IsOwnedByProfile = false and IsCustom = true",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name"},{name:"PlatformCachePartition",label:"Platform Cache Partition",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"FeedPostTemplate",label:"Post Template",method:"Metadata",api:"PostTemplate",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"Queues",label:"Queue",method:"Metadata",api:"Queue",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"RecordType",label:"Record Type",method:"SOQL",with:"DeveloperName",details:"get SobjectType",query:"Select Id,DeveloperName,Name,SObjectType,LastModifiedDate,LastModifiedBy.Name From RecordType",outputFields:"Name,DeveloperName,SobjectType,LastModifiedDate,LastModifiedBy.Name"},{name:"RemoteProxy",label:"Remote Site",method:"Metadata",
api:"RemoteSiteSetting",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"Report",label:"Report",method:"SOQL",query:"Select Id,Name,DeveloperName,FolderName,LastModifiedDate,LastModifiedBy.Name From Report",outputFields:"Name,DeveloperName,FolderName,LastModifiedDate,LastModifiedBy.Name"},{name:"ReportJob",label:"Reporting Snapshot",method:"Metadata",api:"AnalyticSnapshot",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"UserRole",label:"Role",method:"SOQL",query:"SELECT Id,Name,LastModifiedDate,LastModifiedBy.Name From UserRole where portaltype = 'None'",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name",ignoreNS:!0},{name:"Scontrol",label:"S-Control",method:"Tooling",with:"Name",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name"},{name:"SecurityCustomBaseline",label:"Security Custom Baseline",method:"NO"},{name:"ActionSend",label:"Send Action",method:"NO"},{name:"CustomObjectCriteriaSharingRule",label:"Sharing Criteria Rule",method:"NO"},{name:"CustomObjectOwnerSharingRule",label:"Sharing Owner Rule",method:"NO"},{name:"SharingSet",label:"Sharing Set",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"Site",label:"Site.com",method:"Metadata",api:"SiteDotCom",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"StaticResource",label:"Static Resource",method:"Tooling",with:"Name",outputFields:"Name,LastModifiedDate,LastModifiedBy.Name"},{name:"CustomTabDefinition",label:"Tab",method:"Metadata",api:"CustomTab",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"TransactionSecurityPolicy",label:"Transaction Security Policy",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"UserProvisioningConfig",label:"User Provisioning Config",method:"Tooling",with:"DeveloperName",outputFields:"DeveloperName,LastModifiedDate,LastModifiedBy.Name"},{name:"ValidationFormula",label:"Validation Rule",method:"Tooling",api:"ValidationRule",with:"ValidationName",details:"get EntityDefinitionId and describe parent",query:"Select Id,ValidationName,EntityDefinitionId,LastModifiedDate,LastModifiedBy.Name From ValidationRule",outputFields:"ValidationName,Parent,ParentApiName,LastModifiedDate,LastModifiedBy.Name"},{name:"ApexComponent",label:"Visualforce Component",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"ApexPage",label:"Visualforce Page",method:"Metadata",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"CspFrameAncestor",label:"Whitelisted Site",method:"Metadata",api:"CspTrustedSite",outputFields:"fullName,lastModifiedByName,lastModifiedDate"},{name:"ActionEmail",label:"Workflow Email Alert",method:"Metadata",api:"WorkflowAlert",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"ActionFieldUpdate",label:"Workflow Field Update",method:"Metadata",api:"WorkflowFieldUpdate",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"ActionOutboundMessage",label:"Workflow Outbound Message",method:"Metadata",api:"WorkflowOutboundMessage",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"WorkflowRule",label:"Workflow Rule",method:"Tooling",query:"Select Id,Name,TableEnumOrId,LastModifiedDate,LastModifiedBy.Name From WorkflowRule",outputFields:"Name,Parent,ParentApiName,LastModifiedDate,LastModifiedBy.Name"},{name:"ActionTask",label:"Workflow Task",method:"Metadata",api:"WorkflowTask",splitParentField:"fullName",outputFields:"Name,Parent,lastModifiedByName,lastModifiedDate"},{name:"Community",label:"Zone",method:"Metadata",api:"Community",outputFields:"fullName,lastModifiedByName,lastModifiedDate"}]};for(var i in consts.QuickLinks){var ql=consts.QuickLinks[i];ql.l=chrome.i18n.getMessage(ql.n)||ql.n}return consts}),global.true=exports}({},function(){return this}());