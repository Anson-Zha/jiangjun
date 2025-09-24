Page({
  data: {
    activeTab: 'pending',
    tabs: [
      { id: 'pending', label: '未回访' },
      { id: 'finished', label: '已回访' }
    ],
    searchValue: '',
    pendingList: [
      {
        cardNo: 'EINS9234567',
        userName: 'cba',
        address: '北京市市辖区海淀区街道54333',
        phone: '133****0503',
        installDate: '2025-10-18'
      },
      {
        cardNo: 'EINS711112',
        userName: '张三',
        address: '北京市昌南藏族自治区州临泽县1231号',
        phone: '134****0503',
        installDate: '2025-10-19'
      },
      {
        cardNo: 'EINS250908',
        userName: '张三丰',
        address: '陕西省西安市长安区兴国路实验全3号',
        phone: '133****0503',
        installDate: '2025-12-13'
      }
    ],
    finishedList: [
      {
        cardNo: 'EINS1234001',
        userName: '李雷',
        address: '北京市东城区新中街100号',
        phone: '138****0503',
        installDate: '2025-06-01'
      },
      {
        cardNo: 'EINS1234568',
        userName: '韩梅梅',
        address: '天津市和平区南京路20号',
        phone: '139****0503',
        installDate: '2025-06-12'
      }
    ]
  },

  onSearchInput(e) {
    this.setData({ searchValue: e.detail.value });
  },

  clearSearch() {
    this.setData({ searchValue: '' });
  },

  switchTab(e) {
    const { id } = e.currentTarget.dataset;
    this.setData({ activeTab: id });
  },

  handleCreate() {
    wx.showToast({
      title: '点击新增',
      icon: 'none'
    });
  },

  handleGoHome() {
    const pages = getCurrentPages();
    if (pages.length > 1) {
      wx.navigateBack({ delta: pages.length - 1 });
      return;
    }

    wx.showToast({
      title: '已在主页',
      icon: 'none'
    });
  }
});
