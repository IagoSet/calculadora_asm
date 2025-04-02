try{let e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="77cfd1be-9863-44f6-a8c8-91d3a911ec50",e._sentryDebugIdIdentifier="sentry-dbid-77cfd1be-9863-44f6-a8c8-91d3a911ec50")}catch(e){}exports.id=5203,exports.ids=[5203],exports.modules={14464:e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=14464,e.exports=t},12308:e=>{function t(e){var t=Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=()=>[],t.resolve=t,t.id=12308,e.exports=t},38485:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{EE:()=>I,JF:()=>R,Jz:()=>L,OZ:()=>g,PR:()=>p,VJ:()=>m,ZI:()=>u,uV:()=>A,vc:()=>_});var o=r(97288),n=r(48449),s=e([o]);function i(e){return o.Z.prepare("SELECT * FROM connection WHERE provider = ?").get((0,n.Xz)(e))}o=(s.then?(await s)():s)[0];let u={upsert:function(e){let t=i(e.provider)||{};return{id:o.Z.prepare(`
    INSERT INTO connection (provider, apikey, organization_id, custom_link, google_Oauth, region, access_key_id, secret_access_key, session_token)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(provider) DO UPDATE SET
      apikey = COALESCE(excluded.apikey, connection.apikey),
      organization_id = COALESCE(excluded.organization_id, connection.organization_id),
      custom_link = COALESCE(excluded.custom_link, connection.custom_link),
      google_Oauth = COALESCE(excluded.google_Oauth, connection.google_Oauth),
      region = COALESCE(excluded.region, connection.region),
      access_key_id = COALESCE(excluded.access_key_id, connection.access_key_id),
      secret_access_key = COALESCE(excluded.secret_access_key, connection.secret_access_key),
      session_token = COALESCE(excluded.session_token, connection.session_token),
      updated_at = CURRENT_TIMESTAMP
  `).run((0,n.Xz)(e.provider),e.apikey??t.apikey,e.organization_id??t.organization_id,e.custom_link??t.custom_link,e.google_Oauth??t.google_Oauth,e.region??t.region,e.access_key_id??t.access_key_id,e.secret_access_key??t.secret_access_key,e.session_token??t.session_token).lastInsertRowid,...e,created_at:t.created_at??new Date().toISOString(),updated_at:new Date().toISOString()}},getByProvider:i,getAll:function(){return o.Z.prepare("SELECT * FROM connection").all()},delete:function(e){o.Z.prepare("DELETE FROM connection WHERE provider = ?").run((0,n.Xz)(e))}};function E(){return o.Z.prepare("SELECT * FROM codegpt_session LIMIT 1").get()}let p={upsert:function(e){let t=E()||{};o.Z.prepare(`
    INSERT INTO codegpt_session (id, access_token, refresh_token, expires_at, signed_distinct_id, distinct_id) 
    VALUES (1, ?, ?, ?, ?, ?)
    ON CONFLICT(id) DO UPDATE SET
      access_token = excluded.access_token,
      refresh_token = excluded.refresh_token,
      expires_at = excluded.expires_at,
      signed_distinct_id = excluded.signed_distinct_id,
      distinct_id = excluded.distinct_id,
      updated_at = CURRENT_TIMESTAMP
  `).run(e.access_token??t.access_token,e.refresh_token??t.refresh_token,e.expires_at??t.expires_at,e.signed_distinct_id??t.signed_distinct_id,e.distinct_id??t.distinct_id)},get:E,delete:function(){o.Z.prepare("DELETE FROM codegpt_session").run()}};function d(e){return o.Z.prepare("SELECT * FROM settings WHERE provider = ?").get((0,n.Xz)(e))??{provider:e,memory:10,temperature:0,max_tokens:512}}let _={upsert:function(e){let t=d((0,n.Xz)(e.provider))||{};return{id:o.Z.prepare(`
    INSERT INTO settings (provider, memory, temperature, max_tokens)
    VALUES (?, ?, ?, ?)
    ON CONFLICT(provider) DO UPDATE SET
      memory = COALESCE(excluded.memory, settings.memory),
      temperature = COALESCE(excluded.temperature, settings.temperature),
      max_tokens = COALESCE(excluded.max_tokens, settings.max_tokens),
      updated_at = CURRENT_TIMESTAMP
  `).run((0,n.Xz)(e.provider),e.memory??t.memory,e.temperature??t.temperature,e.max_tokens??t.max_tokens).lastInsertRowid,provider:e.provider,memory:e.memory??t.memory,temperature:e.temperature??t.temperature,max_tokens:e.max_tokens??t.max_tokens,created_at:t.created_at??new Date().toISOString(),updated_at:new Date().toISOString()}},getByProvider:d,getAll:function(){return o.Z.prepare("SELECT * FROM settings").all()},delete:function(e){o.Z.prepare("DELETE FROM settings WHERE provider = ?").run((0,n.Xz)(e))}};function T(){return o.Z.prepare("SELECT * FROM auto_complete LIMIT 1").get()??{enabled:!0,provider:"CodeGPT Plus",model:"Turbo",max_tokens:300,delay:200}}let R={upsert:function(e){let t=T()||{};o.Z.prepare(`
    INSERT OR REPLACE INTO auto_complete (id, enabled, provider, model, max_tokens, delay, created_at, updated_at)
    VALUES (1, ?, ?, ?, ?, ?, COALESCE(?, CURRENT_TIMESTAMP), CURRENT_TIMESTAMP)
  `).run(e.enabled??t.enabled??!0,(0,n.Xz)(e.provider||t.provider||"CodeGPT Plus"),e.model??t.model??"Turbo",e.max_tokens??t.max_tokens??300,e.delay??t.delay??200,t.created_at)},get:T,delete:function(){o.Z.prepare("DELETE FROM auto_complete").run()}};function l(){return o.Z.prepare("SELECT * FROM auto_select LIMIT 1").get()}let L={upsert:function(e){let t=l()||{};o.Z.prepare(`
    INSERT OR REPLACE INTO auto_select (id, enabled, created_at, updated_at)
    VALUES (1, ?, COALESCE(?, CURRENT_TIMESTAMP), CURRENT_TIMESTAMP)
  `).run(e.enabled??t.enabled,t.created_at)},get:l,delete:function(){o.Z.prepare("DELETE FROM auto_select").run()}};function c(e){return o.Z.prepare("SELECT * FROM history WHERE id = ?").get(e)}let A={upsert:function(e){let t=c(e.id)||{},r=o.Z.prepare(`
    INSERT INTO history (id, name)
    VALUES (?, ?)
    ON CONFLICT(id) DO UPDATE SET
      name = COALESCE(excluded.name, history.name),
      updated_at = CURRENT_TIMESTAMP
  `).run(e.id??t.id,e.name??t.name);return{id:e.id??r.lastInsertRowid.toString(),...e,created_at:t.created_at??new Date().toISOString(),updated_at:new Date().toISOString()}},getById:c,getAll:function(){return o.Z.prepare("SELECT * FROM history ORDER BY id DESC").all()},getEmpty:function(){return o.Z.prepare(`
    SELECT h.*
    FROM history h
    LEFT JOIN message m ON h.id = m.history_id
    WHERE m.id IS NULL
    ORDER BY h.id ASC
    LIMIT 1
  `).get()},delete:function(e){o.Z.prepare("DELETE FROM message WHERE history_id = ?").run(e),o.Z.prepare("DELETE FROM history WHERE id = ?").run(e)}},m={upsert:function(e){let t=o.Z.prepare(`
    INSERT OR REPLACE INTO message (id, content, display, message_index, history_id, role, created_at, updated_at)
    VALUES (?, ?, ?, ?, ?, ?, COALESCE(?, CURRENT_TIMESTAMP), CURRENT_TIMESTAMP)
  `).run(e.id,e.content,e.display,e.message_index,e.history_id,e.role??"user",e.created_at);return{id:e.id??t.lastInsertRowid.toString(),...e,created_at:e.created_at??new Date().toISOString(),updated_at:new Date().toISOString()}},getById:function(e){return o.Z.prepare("SELECT * FROM message WHERE id = ?").get(e)},getAll:function(){return o.Z.prepare("SELECT * FROM message ORDER BY id DESC").all()},getAllByHistoryId:function(e){return o.Z.prepare('SELECT * FROM message WHERE history_id = ? ORDER BY "message_index" ASC').all(e)},delete:function(e){o.Z.prepare("DELETE FROM message WHERE id = ?").run(e)}},I={upsert:function(e){o.Z.prepare(`
    INSERT INTO kv (key, value)
    VALUES (?, ?)
    ON CONFLICT(key) DO UPDATE SET
      value = excluded.value
  `).run(e.key,JSON.stringify(e.value))},get:function(e){let t=o.Z.prepare("SELECT * FROM kv WHERE key = ?").get(e);if(t)return JSON.parse(t.value||"")},getAll:function(){return o.Z.prepare("SELECT * FROM kv").all().map(e=>({key:e.key,value:JSON.parse(e.value)}))},delete:function(e){o.Z.prepare("DELETE FROM kv WHERE key = ?").run(e)}},g={upsert:function(e){let t=Math.floor(333);for(let r=0;r<e.length;r+=t){let a=e.slice(r,r+t),n=a.map(()=>"(?, ?, ?)").join(", "),s=o.Z.prepare(`
      INSERT OR REPLACE INTO file_hashes (origin_file, workspace_id, hash)
      VALUES ${n}
    `),i=a.flatMap(e=>[e.origin_file,e.workspace_id,e.hash]);s.run(...i)}},get:function(e){return o.Z.prepare("SELECT * FROM file_hashes WHERE workspace_id = ? ").all(e)},hasHashes:function(e){return!!o.Z.prepare("SELECT * FROM file_hashes WHERE workspace_id = ? LIMIT 1").all(e).length},getByOriginFile:function(e,t){return o.Z.prepare("SELECT hash FROM file_hashes WHERE workspace_id = ? AND origin_file = ?").all(e,t)},delete:function(e,t){if(0===t.length)return;let r=t.map(()=>"?").join(",");o.Z.prepare(`DELETE FROM file_hashes WHERE workspace_id = ? AND hash IN (${r})`).run(e,...t)},deleteAll:function(e){o.Z.prepare("DELETE FROM file_hashes WHERE workspace_id = ?").run(e)}};a()}catch(e){a(e)}})},56431:(e,t,r)=>{"use strict";r.d(t,{Z:()=>a});let a=function(e){try{e.exec(`
      CREATE TABLE IF NOT EXISTS "connection" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "provider" TEXT NOT NULL UNIQUE,
        "apikey" TEXT,
        "organization_id" TEXT DEFAULT NULL,
        "custom_link" TEXT DEFAULT NULL,
        "google_Oauth" TEXT DEFAULT NULL,
        "region" TEXT DEFAULT NULL,
        "access_key_id" TEXT DEFAULT NULL,
        "secret_access_key" TEXT DEFAULT NULL,
        "session_token" TEXT DEFAULT NULL,
        "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
        "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `),e.exec(`
      CREATE TABLE IF NOT EXISTS "codegpt_session" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "access_token" TEXT NULL,
        "refresh_token" TEXT NULL,
        "expires_at" INTEGER NULL,
        "signed_distinct_id" TEXT DEFAULT NULL,
        "distinct_id" TEXT NULL,
        "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
        "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `),e.exec(`
      CREATE TABLE IF NOT EXISTS "settings" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "provider" TEXT NOT NULL UNIQUE,
        "memory" INTEGER DEFAULT 10,
        "temperature" REAL DEFAULT 0,
        "max_tokens" INTEGER DEFAULT 512,
        "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
        "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `),e.exec(`
      CREATE TABLE IF NOT EXISTS "auto_complete" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "enabled" INTEGER NOT NULL DEFAULT 1,
        "provider" TEXT DEFAULT "CodeGPT Plus Beta",
        "model" TEXT DEFAULT "Plus",
        "max_tokens" INTEGER DEFAULT 300,
        "delay" INTEGER DEFAULT 300,
        "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
        "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `),e.exec(`
      CREATE TABLE IF NOT EXISTS "auto_select" (
      "id" INTEGER PRIMARY KEY AUTOINCREMENT,
      "enabled" INTEGER NOT NULL DEFAULT 1,
      "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
      "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP    
      );
    `),e.exec(`
      CREATE TABLE IF NOT EXISTS "flags" (
     "id" INTEGER PRIMARY KEY AUTOINCREMENT,
     "name" TEXT NOT NULL UNIQUE,
     "used" INTEGER NOT NULL DEFAULT 0,
     "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
     "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `),e.exec(`
      CREATE TABLE IF NOT EXISTS "kv" (
      "key" TEXT PRIMARY KEY,
      "value" TEXT NOT NULL
      );
    `),e.exec(`
      CREATE TABLE IF NOT EXISTS "history" (
        "id" TEXT PRIMARY KEY,
        "name" TEXT DEFAULT NULL,
        "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
        "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP
      );
    `),e.exec(`
      CREATE TABLE IF NOT EXISTS "message" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "content" TEXT NOT NULL,
        "role" TEXT NOT NULL,
        "display" TEXT NOT NULL,
        "message_index" INTEGER NOT NULL,
        "history_id" TEXT DEFAULT NULL,
        "created_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
        "updated_at" DATETIME DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY(history_id) REFERENCES history(id),
        UNIQUE(history_id, message_index)
        );
    `),e.exec(`
      CREATE TABLE IF NOT EXISTS "file_hashes" (
        "id" INTEGER PRIMARY KEY AUTOINCREMENT,
        "origin_file" TEXT NOT NULL,
        "workspace_id" TEXT NOT NULL,
        "hash" TEXT NOT NULL
        );
    `)}catch(e){throw console.error(`Error initializing schema: ${e.message}`),e}}},97288:(e,t,r)=>{"use strict";r.a(e,async(e,a)=>{try{r.d(t,{Z:()=>e});var o=r(56431),n=r(65372),s=r.n(n),i=r(20629),E=r.n(i),d=r(19801),T=r.n(d),l=r(55315),c=r.n(l);async function u(e="db.sqlite",t=".codegpt",r="qb98QNQptnRmXb"){try{let a=T().homedir(),n=c().join(a,t),i=c().join(n,e);await E().mkdir(n,{recursive:!0});let d=new(s())(i);return d.pragma(`key = '${r}'`),d.pragma("journal_mode = WAL"),(0,o.Z)(d),d}catch(e){throw console.error(`Error initializing database: ${e.message}`),e}}let e=await u();a()}catch(e){a(e)}},1)},48449:(e,t,r)=>{"use strict";r.d(t,{L_:()=>c,Xz:()=>l,fx:()=>A,Ox:()=>R,mk:()=>I});var a=r(68341),o=r.n(a);let n={},s=e=>n[e],i=(e,t)=>{n[e]=t},E=(e,t)=>{Object.keys(n).forEach(r=>{r.startsWith(`${e}-`)&&!r.startsWith(`${e}-${t}`)&&delete n[r]})},d=async(e,t)=>{try{let{setKeyValue:a,cleanKVCache:o}=await Promise.all([r.e(8823),r.e(6703),r.e(2806),r.e(5370)]).then(r.bind(r,25187)),n=e.split("-");if(n.length>=2){let r=n[0],s=n.slice(1).join("-");a(e,t),o({type:r,currentKey:s})}}catch(e){}},T=async e=>{try{let{getKeyValue:t}=await Promise.all([r.e(8823),r.e(6703),r.e(2806),r.e(5370)]).then(r.bind(r,25187));return await t(e)}catch(e){return null}},l=e=>e.toLowerCase().replaceAll(" ",""),c=process.env.NEXT_PUBLIC_IDE??"vscode",u=async()=>{E("providers","all");try{let e=await fetch("https://storage.codegpt.co/vscode/providers.json?no_cache="+Date.now(),{cache:"no-store"});if(!e.ok)return{ok:!1,json:()=>null};let t=await e.json();return i("providers-all",t),d("providers-all",t),{ok:!0,json:()=>Promise.resolve(t)}}catch(e){return console.log({providersError:e.message}),{ok:!1,json:()=>null}}},p=async()=>{let e=s("providers-all");if(e)return u(),{ok:!0,json:()=>Promise.resolve(e)};{let e=await T("providers-all");return e?(i("providers-all",e),u(),{ok:!0,json:()=>Promise.resolve(e)}):await u()}},_=async(e,t)=>{let r=`prompts-${e}${t?`-${t}`:""}`;E("prompts",r);try{let a=await p();if(!a.ok)return null;let n=await a.json(),s=n?.find(t=>t?.link===e)?.prompts?.default;if(!t)return i(r,s||null),d(r,s||null),s||null;let E=n?.find(t=>t?.link===e)?.prompts;if(!E)return i(r,s||null),d(r,s||null),s||null;let T=Object.keys(E).find(e=>o().isMatch(t?.toLowerCase()||"",e)),l=T?E[T]:s||null;return i(r,l),d(r,l),l}catch(e){return console.log({promptsError:e.message}),null}},R=async({provider:e,model:t})=>{let r=`prompts-${e}${t?`-${t}`:""}`,a=s(r);if(a)return _(e,t),a;{let a=await T(r);return a?(i(r,a),_(e,t),a):await _(e,t)}},L=async()=>{E("defaultAgent","all");try{let e=await fetch("https://storage.codegpt.co/vscode/agent-default.json",{cache:"no-store"});if(!e.ok){let e={id:"e2d132bf-ffd5-4df8-a0b3-1c8c54a2bb8a",label:"GPT-4o-mini",image:"logotypes/openai.png",fromMarketplace:!0,description:"CodeGPT OpenAI GPT-4O Mini"};return i("defaultAgent-all",e),d("defaultAgent-all",e),{ok:!1,json:()=>Promise.resolve(e)}}let t=await e.json();return i("defaultAgent-all",t),d("defaultAgent-all",t),{ok:!0,json:()=>Promise.resolve(t)}}catch(t){console.log({defaultAgentError:t.message});let e={id:"e2d132bf-ffd5-4df8-a0b3-1c8c54a2bb8a",label:"GPT-4o-mini",image:"logotypes/openai.png",fromMarketplace:!0,description:"CodeGPT OpenAI GPT-4O Mini"};return{ok:!1,json:()=>Promise.resolve(e)}}},A=async()=>{let e=s("defaultAgent-all");if(e)return L(),e;{let e=await T("defaultAgent-all");if(e)return i("defaultAgent-all",e),L(),e;let t=await L();return await t.json()}},m=async()=>{E("recommendedCodeGPTModels","all");try{let e=await fetch("https://storage.codegpt.co/vscode/recommended-codegpt-models.json",{cache:"no-store"});if(!e.ok){let e=[{name:"GPT-4o",welcome:"Use OpenAI's latest and most powerful LLM",id:"0d6faf2e-9628-40dd-82b2-56d837c94bdc",image:"https://rroxuvsrsdbxacokprau.supabase.co/storage/v1/object/public/agents/0e83fe43-17f4-4494-b130-3797b0145502/0d6faf2e-9628-40dd-82b2-56d837c94bdc.webp",prompt_library:[],description:"Now you can use the latest and most powerful LLM from OpenAI."},{name:"GPT-4o-mini",welcome:"Hello, I'm your new AI Agent Assistant",id:"e2d132bf-ffd5-4df8-a0b3-1c8c54a2bb8a",image:"https://rroxuvsrsdbxacokprau.supabase.co/storage/v1/object/public/agents/8a85ec3e-fb5d-4831-afe5-c837ab9ce488/e2d132bf-ffd5-4df8-a0b3-1c8c54a2bb8a.png",prompt_library:[],description:"GPT-4o mini enables a broad range of tasks with its low cost and latency"}];return i("recommendedCodeGPTModels-all",e),d("recommendedCodeGPTModels-all",e),{ok:!1,json:()=>Promise.resolve(e)}}let t=await e.json();return i("recommendedCodeGPTModels-all",t),d("recommendedCodeGPTModels-all",t),{ok:!0,json:()=>Promise.resolve(t)}}catch(t){console.log({recommendedCodeGPTModelsError:t.message});let e=[{name:"GPT-4o",welcome:"Use OpenAI's latest and most powerful LLM",id:"0d6faf2e-9628-40dd-82b2-56d837c94bdc",image:"https://rroxuvsrsdbxacokprau.supabase.co/storage/v1/object/public/agents/0e83fe43-17f4-4494-b130-3797b0145502/0d6faf2e-9628-40dd-82b2-56d837c94bdc.webp",prompt_library:[],description:"Now you can use the latest and most powerful LLM from OpenAI."},{name:"GPT-4o-mini",welcome:"Hello, I'm your new AI Agent Assistant",id:"e2d132bf-ffd5-4df8-a0b3-1c8c54a2bb8a",image:"https://rroxuvsrsdbxacokprau.supabase.co/storage/v1/object/public/agents/8a85ec3e-fb5d-4831-afe5-c837ab9ce488/e2d132bf-ffd5-4df8-a0b3-1c8c54a2bb8a.png",prompt_library:[],description:"GPT-4o mini enables a broad range of tasks with its low cost and latency"}];return{ok:!1,json:()=>Promise.resolve(e)}}},I=async()=>{let e=s("recommendedCodeGPTModels-all");if(e)return m(),e;{let e=await T("recommendedCodeGPTModels-all");if(e)return i("recommendedCodeGPTModels-all",e),m(),e;let t=await m();return await t.json()}}}};
//# sourceMappingURL=5203.js.map