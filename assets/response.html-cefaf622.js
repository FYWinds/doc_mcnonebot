import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{o as d,c as e,e as r}from"./app-64748420.js";const a={},o=r('<p>一些通用的响应信息</p><h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2><h3 id="通用请求" tabindex="-1"><a class="header-anchor" href="#通用请求" aria-hidden="true">#</a> 通用请求</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>action</td><td><code>String</code></td><td>动作</td></tr><tr><td>params</td><td><code>Object</code></td><td>参数</td></tr><tr><td>echo</td><td><code>Object</code></td><td>请求标识符</td></tr></tbody></table><h3 id="通用响应" tabindex="-1"><a class="header-anchor" href="#通用响应" aria-hidden="true">#</a> 通用响应</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>status</td><td><code>String</code></td><td><code>ok</code> 或者 <code>failed</code></td></tr><tr><td>retcode</td><td><code>Number</code></td><td><a href="#%E9%94%99%E8%AF%AF%E7%A0%81">错误码</a></td></tr><tr><td>error_message</td><td><code>String</code></td><td>错误信息</td></tr><tr><td>data</td><td><code>Object</code></td><td>响应数据</td></tr><tr><td>echo</td><td><code>Object</code></td><td>请求标识符</td></tr></tbody></table><h3 id="错误码" tabindex="-1"><a class="header-anchor" href="#错误码" aria-hidden="true">#</a> 错误码</h3><table><thead><tr><th>错误码</th><th>说明</th></tr></thead><tbody><tr><td>0</td><td>成功</td></tr><tr><td>10001</td><td>请求格式错误</td></tr><tr><td>10002</td><td>未知动作</td></tr><tr><td>10003</td><td>请求参数错误</td></tr><tr><td>20002</td><td>内部处理错误</td></tr><tr><td>30001</td><td>达到RateLimit</td></tr></tbody></table><h2 id="event" tabindex="-1"><a class="header-anchor" href="#event" aria-hidden="true">#</a> Event</h2><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>id</td><td><code>String</code></td><td>事件标识符，UUID v4</td></tr><tr><td>time</td><td><code>Number</code></td><td>事件发生时间，UNIX时间戳</td></tr><tr><td>data</td><td><code>Object</code></td><td>事件数据</td></tr><tr><td>type</td><td><code>String</code></td><td>事件类型</td></tr><tr><td>detail_type</td><td><code>String</code></td><td>事件详细类型</td></tr><tr><td>sub_type</td><td><code>String</code></td><td>事件子类型</td></tr></tbody></table><h2 id="响应内容" tabindex="-1"><a class="header-anchor" href="#响应内容" aria-hidden="true">#</a> 响应内容</h2><h3 id="simple-player" tabindex="-1"><a class="header-anchor" href="#simple-player" aria-hidden="true">#</a> Simple Player</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td><code>String</code></td><td>玩家名</td></tr><tr><td>uuid</td><td><code>String</code></td><td>UUID</td></tr><tr><td>isOnline</td><td><code>Boolean</code></td><td>是否在线</td></tr><tr><td>location</td><td><a href="#location">Location</a></td><td>坐标</td></tr></tbody></table><h3 id="player" tabindex="-1"><a class="header-anchor" href="#player" aria-hidden="true">#</a> Player</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>display_name</td><td><code>String</code></td><td>玩家游戏名</td></tr><tr><td>player_list_name</td><td><code>String</code></td><td>Tablist中显示的游戏名</td></tr><tr><td>address</td><td><code>String</code></td><td>IP 地址</td></tr><tr><td>locale</td><td><code>String</code></td><td>语言</td></tr><tr><td>sneaking</td><td><code>Boolean</code></td><td>是否潜行</td></tr><tr><td>sprinting</td><td><code>Boolean</code></td><td>是否疾跑</td></tr><tr><td>flying</td><td><code>Boolean</code></td><td>是否飞行</td></tr><tr><td>exp</td><td><code>Number</code></td><td>经验值</td></tr><tr><td>level</td><td><code>Number</code></td><td>等级</td></tr><tr><td>total_experience</td><td><code>Number</code></td><td>总经验值</td></tr><tr><td>location</td><td><a href="#location">Location</a></td><td>坐标</td></tr><tr><td>ticks_lived</td><td><code>Number</code></td><td>存活时长</td></tr><tr><td>custom_name_visible</td><td><code>Boolean</code></td><td>自定义游戏名是否可见</td></tr><tr><td>customName</td><td><code>String?</code></td><td>自定义游戏名</td></tr><tr><td>invulnerable</td><td><code>Boolean</code></td><td>是否不可伤害</td></tr><tr><td>scoreboard_tags</td><td><code>String[]</code></td><td>Scoreboard Tags</td></tr></tbody></table><h3 id="location" tabindex="-1"><a class="header-anchor" href="#location" aria-hidden="true">#</a> Location</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>world</td><td><code>String</code></td><td>世界名</td></tr><tr><td>x</td><td><code>Number</code></td><td>-</td></tr><tr><td>y</td><td><code>Number</code></td><td>-</td></tr><tr><td>z</td><td><code>Number</code></td><td>-</td></tr><tr><td>yaw</td><td><code>Number</code></td><td>-</td></tr><tr><td>pitch</td><td><code>Number</code></td><td>-</td></tr></tbody></table><h3 id="simple-command-sender" tabindex="-1"><a class="header-anchor" href="#simple-command-sender" aria-hidden="true">#</a> Simple Command Sender</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>name</td><td><code>String</code></td><td>发送者名</td></tr></tbody></table><h3 id="item" tabindex="-1"><a class="header-anchor" href="#item" aria-hidden="true">#</a> Item</h3><table><thead><tr><th>字段</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>material</td><td><code>String</code></td><td>物品ID</td></tr><tr><td>amount</td><td><code>Number</code></td><td>数量</td></tr></tbody></table>',21),c=[o];function h(i,n){return d(),e("div",null,c)}const s=t(a,[["render",h],["__file","response.html.vue"]]);export{s as default};