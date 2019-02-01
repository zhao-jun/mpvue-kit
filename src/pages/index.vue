<template>
  <div class="container"
       @click="clickHandle('test click', $event)">
    <div class="userinfo"
         @click="bindViewTap">
      <img class="userinfo-avatar"
           v-if="userInfo.avatarUrl"
           :src="userInfo.avatarUrl"
           background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>

    <div class="usermotto">
      <div class="user-motto">
        <card :text="motto"></card>
      </div>
    </div>

    <form class="form-container">
      <input type="text"
             class="form-control"
             v-model="motto"
             placeholder="v-model" />
      <input type="text"
             class="form-control"
             v-model.lazy="motto"
             placeholder="v-model.lazy" />
    </form>
    <button @click.stop="clickVant">vant 按钮</button>
    <a href="/packageA/logs"
       class="counter">分包</a>
  </div>
</template>

<script>
import card from '@/components/card'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {}
    }
  },

  components: {
    card
  },

  methods: {
    bindViewTap () {
      const path = '/packageA/logs'
      // wx.navigateTo({ url })
      // 在 mpvue 中使用 vue-router 兼容的路由写法
      // console.log(this.$router)
      this.$router.push({ path })
    },
    // 从2018年4月30日开始，小程序与小游戏的体验版、开发版调用 wx.getUserInfo 接口，将无法弹出授权询问框，默认调用失败。正式版暂不受影响
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      // eslint-disable-next-line
      console.log('clickHandle:', msg, ev)
    },
    clickVant (e) {
      console.log(e)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  },

  onLoad () {
    console.log(this.$root.$mp.query)
  }
}
</script>

<style scoped>
.userinfo {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.userinfo-avatar {
  width: 128rpx;
  height: 128rpx;
  margin: 20rpx;
  border-radius: 50%;
}

.userinfo-nickname {
  color: #aaa;
}

.usermotto {
  margin-top: 150px;
}

.form-control {
  display: block;
  padding: 0 12px;
  margin-bottom: 5px;
  border: 1px solid #ccc;
  text-align: left;
}

.counter {
  display: inline-block;
  margin: 10px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}
</style>
