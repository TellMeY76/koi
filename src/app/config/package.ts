export const PACKAGES = [
  {
    name: '标准创业服务套餐(S)',
    contents: ['标准财税服务', '税筹顾问服务', '科技项目研发服务', '创业政策申领', '季度创业报告', '赠500元商标券'],
    ranges: ['科技型企业', '孵化器入驻企业'],
    worth: '19500', sell: 12960
  },
  {
    name: '资本创投服务套餐(VC)',
    contents: ['标准财税服务', '税筹顾问服务', '科技项目研发服务', '财务内控体系建设', '新四板挂牌服务', '季度创业服务', '2家持股平台财税托管服务',
      '赠500元商标券'],
    ranges: ['科技型企业', '已融资或正在融资'],
    worth: '29300', sell: 20160
  },
  {
    name: '高企培育标准套餐(HT1)',
    contents: ['国家高企财务服务', '税筹顾问服务', '创业政策推送', '创业政策申领', '财务内控体系建设', '年度创业报告',
      '赠900元专利券'],
    ranges: ['科技型企业', '高企申报筹备企业', '高企'],
    worth: '42300', sell: 22800
  }
];
export const SERVICES = new Map([
  ['标准财税服务', ['财税咨询', '凭证整理', '代取账单', '记账软件使用', '专票认证', '纳税申报', '编制报表', '所得税汇算清缴', '凭证装订',
    '社保开通', '工商年检']],
  ['税筹顾问服务', ['增值税税筹方案', '企业所得税税筹方案', '股息分红税筹方案', '高管个税税筹方案']],
  ['科技项目研发服务', ['研发费用加计扣除', '项目R&D辅助账列支', '科技网站备案', '研发费用补助财务相关材料准备']],
  ['创业政策推送', []],
  ['创业政策申领', ['10000元以上社保补贴申请', '30000元以上知识产权补贴申请']],
  ['季度创业服务', []],
  ['财务内控体系建设', ['报销制度', '员工手册', '成本核算体系']],
  ['新四板挂牌服务', ['申报资料的收集、整理与申请', '补贴材料的收集与申请']],
  ['2家持股平台财税托管服务', ['财税咨询', '纳税申报', '工商年检', '所得税汇算清缴']],
  ['国家高企财务服务', ['高级创业顾问服务', '科技网站备案', '研发费用加计扣除', '协助高企入库备案及认定补贴', '每年5个项目(R&D)辅助账列支',
    '每年4次高企指标测算并推送辅助决策建议', '项目逻辑与清单梳理', '配合审计提供财务数据与资料']],
  ['年度创业报告', []],
]);
