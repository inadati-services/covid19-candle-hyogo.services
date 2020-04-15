# Rapi(Resolved API)

rapiは、GraphQLサーバーから提供されるデータを  
キャッシュへの書き込み処理も含め、解決済みAPI(Resolved API)として  
フロントエンドフレームワークのコンポーネント側へ提供する為のプラグインです。 

## 導入方法
基本的に利用しているフレームワークのcontextに追加する形で利用します。  
以下にnuxt.jsに導入する例を示します。

## nuxt.jsに導入する

### 1. pluginsディレクトリに`git clone`する。

```
cd plugins
git clone git@github.com:gqlkit-lab/rapi.git
```

### 2. rapiをnuxt.jsのcontextに追加する

```javascript
import example from './resolvers/Query/example'
import mutateExample from './resolvers/Mutation/mutateExample'

export const rapi = {
    Query: {
        example
    },
    Mutation: {
        mutateExample
    }
}

// Insert it in the context of the framework you use
// example nuxt.js

export default (ctx, inject) => {
    inject('rapi', rapi)
}
```

### 3. nuxt.config.jsを編集する

```javascript
plugins: [
  '~/plugins/rapi'
],
```

## コンポーネント側からResolved APIを利用する

### asyncDataからqueryを利用する

```javascript
async asyncData({ app: { $rapi } }) {
    const [example] = await Promise.all([
        $rapi.Query.example(),
    ])
    return {
        example
    }
}
```

### methodsからmutationを利用する
```javascript
methods: {
    async mutateExample(variables) {
        await Promise.all([
            this.$rapi.Mutation.mutateExample(variables)
        ])
    }
},
```

## Resolve of cache
キャッシュの読み込み、書き込みはlowdbやlokijsなどのインメモリデータベースを利用します。  
お好きなインメモリDBを使ってキャッシュの解決を行うことができます。  
  
あるいは、gqlkitには[jorm](https://github.com/gqlkit-lab/jorm)というインメモリDBもあります。  
jormを利用することで非常にシンプルな記述でキャッシュの読み書きが可能です。  
gqlkit-serverではgormを採用しています。  
ですので、gormに似たapiを提供するjormであれば  
サーバー側の開発に慣れれば、クライアント側の開発も非常に楽にこなせるはずです。  
→ [jormを使う](https://github.com/gqlkit-lab/jorm)
