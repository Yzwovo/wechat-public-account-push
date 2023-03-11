/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '熊宝, 早上好',
    desc: `
      **{{date.DATA}}**
      
      
      ---
      
      城市：{{city.DATA}}
      
      天气：{{weather.DATA}}
      
      气温(最高/最低):{{max_temperature.DATA}} / {{min_temperature.DATA}}
      
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们在一起的第{{love_day.DATA}}天
      
      {{birthday_message.DATA}}
      
      不论我们相隔的距离有多么长 我们的❤都会永远在一起
      
      如果让我对你说三个字的话 我想说：我爱你 
      
      我爱你一辈子 我知道你也是 
      
      ---
      
      {{moment_copyrighting.DATA}}
      
    `      
      
      
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
