import{_ as s}from"./plugin-vue_export-helper-c27b6911.js";import{o as n,c as a,e as l}from"./app-64748420.js";const e={},p=l(`<h2 id="基础配置" tabindex="-1"><a class="header-anchor" href="#基础配置" aria-hidden="true">#</a> 基础配置</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># 服务器ID，用于标识自身</span></span>
<span class="line"><span style="color:#E06C75;">server-name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;SampleServer&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="消息格式" tabindex="-1"><a class="header-anchor" href="#消息格式" aria-hidden="true">#</a> 消息格式</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">message</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 格式，可选: text, binary</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># binary 暂时不可用</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">format</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">text</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 开启 PlaceholderAPI 支持</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 依赖 PlaceholderAPI</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 暂时不可用</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">placeholderapi</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 开启 Unicode 表情支持</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 不一定能完美显示</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 关闭后会消除消息中所有的Unicode表情</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 暂时不可用</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">unicode-emoji</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="日志输出" tabindex="-1"><a class="header-anchor" href="#日志输出" aria-hidden="true">#</a> 日志输出</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">output</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 日志等级</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Available levels: (trace), debug, info, warn, error</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">level</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">info</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 输出频道</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 可选: console, file, disabled</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 暂时不支持输出到文件与禁用</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">channel</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">console</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 文件路径</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 仅在输出到文件时有效</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 相对于服务端核心文件的路径</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># 暂时不可用</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">file</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;logs/&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="api调用限制" tabindex="-1"><a class="header-anchor" href="#api调用限制" aria-hidden="true">#</a> API调用限制</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">api</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># API 调用速率限制，采用令牌桶算法</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">rate-limit</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">enabled</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;"># 是否启用限速</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">frequency</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;"># 令牌回复时间，单位秒</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">capacity</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span><span style="color:#ABB2BF;"> </span><span style="color:#7F848E;font-style:italic;"># 总令牌数量</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="连接配置" tabindex="-1"><a class="header-anchor" href="#连接配置" aria-hidden="true">#</a> 连接配置</h2><p>目前可以添加0-N个Ｗebsocket连接和0-N个反向Websocket连接。</p><h3 id="websocket连接" tabindex="-1"><a class="header-anchor" href="#websocket连接" aria-hidden="true">#</a> Websocket连接</h3><p>参考 <a href="connection#websocket%E8%BF%9E%E6%8E%A5">Websocket连接</a></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">connections</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  - </span><span style="color:#E06C75;">ws-1</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#7F848E;font-style:italic;"># 监听</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#E06C75;">host</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0.0.0.0</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#7F848E;font-style:italic;"># Listening port</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#E06C75;">port</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">8081</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#7F848E;font-style:italic;"># Heartbeat interval in seconds</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#E06C75;">heartbeat-interval</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">30</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#7F848E;font-style:italic;"># Access token</span></span>
<span class="line"><span style="color:#ABB2BF;">     </span><span style="color:#E06C75;">token</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="反向-websocket-连接" tabindex="-1"><a class="header-anchor" href="#反向-websocket-连接" aria-hidden="true">#</a> 反向 Websocket 连接</h3><p>参考 <a href="connection#%E5%8F%8D%E5%90%91websocket%E8%BF%9E%E6%8E%A5">反向Websocket连接</a></p><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#E06C75;">connections</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;"> - </span><span style="color:#E06C75;">ws-reverse-1</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Server address for ws client</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Setting this will override the following two settings</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">address</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;ws://127.0.0.1:8080/mc/ws&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Reconnect interval in milliseconds</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">reconnect-interval</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10000</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Access token</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">token</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="完整配置参考" tabindex="-1"><a class="header-anchor" href="#完整配置参考" aria-hidden="true">#</a> 完整配置参考</h2><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="shiki one-dark-pro" style="background-color:#282c34;" tabindex="0"><code><span class="line"><span style="color:#7F848E;font-style:italic;"># The Main config file for PluginNonebot</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># The server&#39;s identifier/name</span></span>
<span class="line"><span style="color:#E06C75;">server-name</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;SampleServer&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">message</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Message format</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Available variables: text, binary</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># TODO binary is not implemented yet</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">format</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">text</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Enable PlaceholderAPI support</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Requires PlaceholderAPI</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># TODO Not implemented yet</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">placeholderapi</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Enable Unicode Emoji support</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># May not display properly</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># If disabled all emoji in messages will be erased</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">unicode-emoji</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">output</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Log level</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Available levels: (trace), debug, info, warn, error</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">level</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">info</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Log channel</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Available channels: console, file</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># TODO Not implemented yet</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">channel</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">console</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Log file path</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Only works when channel is set to file</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># Relative path to your server jar</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># TODO Not implemented yet</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">file</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;logs/&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">api</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#7F848E;font-style:italic;"># API Rate Limit, based on token bucket algorithm</span></span>
<span class="line"><span style="color:#ABB2BF;">  </span><span style="color:#E06C75;">rate-limit</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">enabled</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">false</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">frequency</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">1</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">capacity</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">3</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E06C75;">connections</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;"># Connections, can add multiple conntections using the same type</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#- ws:   # Websocket, plugin will work as an WS server</span></span>
<span class="line"><span style="color:#7F848E;font-style:italic;">#- ws-reverse: # Reversed Websocket, plugin will work as an WS client</span></span>
<span class="line"><span style="color:#ABB2BF;"> - </span><span style="color:#E06C75;">ws-reverse-1</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Server address for ws client</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Setting this will override the following two settings</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">address</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&quot;ws://127.0.0.1:8080/mc/ws&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Reconnect interval in milliseconds</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">reconnect-interval</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">10000</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Access token</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">token</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;"> - </span><span style="color:#E06C75;">ws-1</span><span style="color:#ABB2BF;">:</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Listening host</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">host</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">0.0.0.0</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Listening port</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">port</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">8081</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Heartbeat interval in seconds</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">heartbeat-interval</span><span style="color:#ABB2BF;">: </span><span style="color:#D19A66;">30</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#7F848E;font-style:italic;"># Access token</span></span>
<span class="line"><span style="color:#ABB2BF;">    </span><span style="color:#E06C75;">token</span><span style="color:#ABB2BF;">: </span><span style="color:#98C379;">&#39;&#39;</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,18),o=[p];function i(c,t){return n(),a("div",null,o)}const d=s(e,[["render",i],["__file","config.html.vue"]]);export{d as default};
