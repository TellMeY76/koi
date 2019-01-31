export const REPO_DETAILS = [
  {
    name: '股权架构（注册）', icon: 'business',
    description: '有助于创业公司稳定，方便融资。',
    status: ['股东结构：周剑，占股100%', '公司性质：有限公司', '注册地址：甬港现代铭楼', '注册资本：300万元', '行业类型：科技型，生物科技'],
    suggest: '一人股东，有绝对控制权，权利我最大，一切我做主，可是一人公司却暗藏法律风险：股东对公司债务承担连带清偿责任。且，股权架构设计是否合理也' +
      '影响后期融资，因此股权架构设计不容忽视！',
    weAdvice: {label: '', contents: ['尽快完成增资扩股，避免连偿风险。', '设立有限合伙企业，吸引社会投资。', '设立员工持股平台，利于员工激励。']}
  },
  {
    name: '政策补助', icon: 'account_balance',
    description: '政策奖励的好事儿，可千万别错过了！',
    status: ['.法人性质：宁波户籍', '人员结构：本科1人，硕士1人（计划）', '行业类型：科技型，生物科技', '注册地址：甬港现代铭楼', '知识产权：0'],
    suggest: '真不巧，您错过了硕士人才10万元的创业落地奖励！不过也别灰心，符合您的高新区创业政策可不止这个！专利补贴，用工补贴，研发项目补贴，' +
      '税收返还补贴……这些，您都可以享受哦！',
    weAdvice: {
      label: '以下政策可以着重关注：', contents: ['创业者社会保险补贴，最高补助3万元。', '创业带动就业补贴，最高10万元。',
        '发明专利资助，高新区奖励3.8万。', '宁波市智团创业计划，最高奖励50万元。', '园区退税奖励，10万以上地方留成部分返还80%以上。']
    }
  },
  {
    name: '融资计划', icon: 'assignment',
    description: '绘制属于您的初创企业资本地图',
    status: ['行业类型：科技型，生物科技', '是否引入外部投资者：是'],
    suggest: '在您计划踏入资本市场，准备股权融资的那一刻，几个提前规范必须注意：知识产权、员工社保、财务审计，其次才是系统的融资规划，根据企业阶段' +
      '匹配不同类型的资本机构：天使投资人、VC、PE等，同时用好国家、地区对初创企业的扶持政策，有融又有奖，岂不更好？',
    weAdvice: {
      label: '', contents: ['实施新四板（甬股交）挂牌，不仅挂牌费有补贴，获得融资、银行贷款还有额外奖励。', '安利一款产品：建设银行“云稅贷”，' +
      '纳税10万元，可贷100万，年化5.52%。',
        '招用这两类人（宁波户籍劳动者、毕业5年内高校毕业生）银行贷款还有贴息补助，额度最高300万元。']
    }
  },
  {
    name: '财税计划', icon: 'assessment',
    description: '专业税筹方案已备好,请查收!',
    status: ['行业类型：科技型，生物科技', '注册地址：甬港现代铭楼', '税务资格：小规模纳税人', '税种行业：商业'],
    suggest: `小规模纳税人好处多多，增值税、所得税的特殊优待可一定要用好：
1.月销售额在10万元以下（或季度30万元以下）享受增值税免征政策；
2.小型微利企业，利润100万以下所得税减按5%，100万-300万减按10%。

不过，就算超过销售限额，增值税税点也只有3%，但也请密切关注，因为年销售额超过500万元就要强制认定为一般纳税人了，到时候可是16%的税点，如果成本费用可抵扣项不多，这个纳税金额还是挺惊人的！`,
    weAdvice: {
      label: '', contents: ['规范研发费用，加计扣除也可降低税收成本。', '提前规划高新技术企业，所得税减按15%。',
        '一套聪明的人力资源优化方案，社保个税也能双管齐下。']
    }
  }
];
export const SCHEDULES = [
  {
    title: '股权架构',
    schedule: [
      {content: '名称核准', tip: '', date: '2019.2.15', executive: '易创注册陈瑜波'},
      {content: '注册地址申请', tip: '', date: '2019.2.17', executive: '易创注册陈瑜波'},
      {content: '公司注册', tip: '', date: '2019.2.17', executive: '易创注册陈瑜波'},
      {content: '银行开户', tip: '', date: '2019.2.22', executive: '易创注册陈瑜波'},
      {content: '税务落户', tip: '', date: '2019.2.25', executive: '易创注册陈瑜波'},
      {content: '发票申请', tip: '', date: '2019.2.25', executive: '易创注册陈瑜波'},
      {content: '增资扩股，成立二人有限公司', tip: '', date: '2019.3.10', executive: '易创注册陈瑜波'},
      {content: '设立股权投资有限合伙企业', tip: '', date: '2019.5.25', executive: '易创注册陈瑜波'},
      {content: '设立员工持股有限合伙企业', tip: '', date: ' 2019.8.20', executive: '易创注册陈瑜波'},
    ]
  },
  {
    title: '政策补助',
    schedule: [
      {content: '科技型企业认定', tip: '园区退税翻倍', date: '2019', executive: '易创顾问齐培培'},
      {content: '优质型企业备案', tip: '最高50万奖励', date: '2019.4-5', executive: '易创申报吴磊敏'},
      {content: '创新券网站注册备案', tip: '财务费用减免5000', date: '2019.4-5', executive: '企业负责人'},
      {content: '优质产品申报', tip: '政府采购目录', date: '2019.4-5', executive: '易创申报吴磊敏'},
      {content: '试产新产品备案', tip: '每产品2000', date: '2019.4-5', executive: '易创申报吴磊敏'},
      {content: '知识产权申请', tip: '科技型项目申报的前提', date: ' 2019.4.21', executive: '易创知产沈佳璐'},
      {content: '撰写可行性分析报告', tip: '为后续项目申报打好文件基础', date: '2019.4.24', executive: '企业负责人'},
      {content: '创新型初创企业备案', tip: '申报智团项目必备', date: '2019.4.20', executive: '易创申报吴磊敏'},
      {content: '创业场租补贴', tip: '年租金的20%,每年最高6000', date: '2019.6', executive: '易创申报吴磊敏'},
      {content: '研发费用补贴申请', tip: '最高不超过支出额的5%给予补助', date: '2019.6', executive: '易创申报吴磊敏'},
      {content: '智团项目申报', tip: '最高50万元补贴', date: '2019.8', executive: '易创申报吴磊敏'},
    ]
  },
  {
    title: '融资计划',
    schedule: [
      {content: '甬股交挂牌', tip: '', date: '2019.4.14 ', executive: '易创申报吴磊敏'},
      {content: '优化商业融资计划书', tip: '', date: '2019.6.13', executive: ' 企业负责人'},
      {content: '参加138期无咖“资本相亲会', tip: '', date: ' 2019.6.28', executive: ' 企业负责人'},
      {content: '申请天使引导基金', tip: '', date: '2019.7.11', executive: '企业负责人'},
      {content: '约银行谈税金贷', tip: '', date: '2019.11.27', executive: ' 企业负责人'},
      {content: '宁波创业担保贷款申请', tip: '', date: '2019.12.15', executive: '易创申报吴磊敏'},
    ]
  },
  {
    title: '财税计划',
    schedule: [
      {content: '票据分类及整理 ', tip: '每月工作', date: '2019.2.22前', executive: '企业负责人'},
      {content: '打印银行回单对账单', tip: '每月工作', date: '2019.2.22前', executive: '易创知产沈佳璐'},
      {content: '税控盘抄税', tip: '每月工作', date: '2019.2.22前', executive: '易创申报吴磊敏'},
      {content: '增值税发票认证', tip: '每月工作', date: '2019.2.22前', executive: '企业负责人'},
      {content: '计算当月应交增值税并汇报', tip: '每月工作', date: '2019.2.22前', executive: '易创知产沈佳璐'},
      {content: '把控票据的合规性，根据原始凭证进行账务处理', tip: '每月工作', date: '2019.2.22前', executive: '易创申报吴磊敏'},
      {content: '发现汽车类发票，提醒客户签订租赁合同 ', tip: '每月工作', date: '2019.2.22前', executive: '企业负责人'},
      {content: '确定研发项目名称，并做研发费用单独列支', tip: '每月工作', date: '2019.2.22前', executive: '易创知产沈佳璐'},
      {content: '折旧、摊销、长期待摊费用分摊表制作 ', tip: '每月工作', date: '2019.2.22前', executive: '易创申报吴磊敏'},
      {content: '核算确认材料/库存成本  ', tip: '每月工作', date: '2019.2.22前', executive: '企业负责人'},
      {content: '代为制作工资表', tip: '每月工作', date: '2019.2.22前', executive: '易创知产沈佳璐'},
      {content: '提示发放高温补贴', tip: '每月工作', date: '2019.2.22前', executive: '易创申报吴磊敏'},
      {content: '向客户汇报本月的税收及财务状况，发送财报数据', tip: '每月工作', date: '2019.2.22前', executive: '易创知产沈佳璐'},
      {content: '电子税务局各项税费申报', tip: '每月工作', date: '2019.2.22前', executive: '易创申报吴磊敏'},
      {content: '自然人税收管理系统个税申报', tip: '每月工作', date: '2019.2.22前', executive: '企业负责人'},
      {content: '国地税税款扣缴', tip: '每月工作', date: '2019.2.22后', executive: '易创知产沈佳璐'},
      {content: '社保人员增减', tip: '每月工作', date: '2019.2.23前', executive: '企业负责人'},
      {content: '会计组长定期审账，审完修改', tip: '每月工作', date: '2019.2.28', executive: '易创申报吴磊敏'},

      {content: '凭证打印、装订及交接 ', tip: '', date: '2019.12.31', executive: '企业负责人'},
      {content: '社保基数调整 ', tip: '', date: '2019.5', executive: '易创知产沈佳璐'},
      {content: '所得税汇算清缴', tip: '', date: '2019.5', executive: '易创申报吴磊敏'},
      {content: '工商年度公示', tip: '', date: '2019.6', executive: '企业负责人'},
      {content: '公积金年检', tip: '', date: '2019.7', executive: '易创知产沈佳璐'},
      {content: '公积金基数调整 ', tip: '', date: '2019.7', executive: '易创申报吴磊敏'},
      {content: '社保年检 ', tip: '', date: '2019.7月底前', executive: '易创申报吴磊敏'},
    ]
  }
];
