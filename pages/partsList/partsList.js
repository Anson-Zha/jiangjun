Page({
  data: {
    searchValue: '',
    hasEmptyImage: false,
    tabs: [
      {
        id: 'apply',
        label: '部品调品申请',
        tip: '跟进在途申请',
        gradient: 'linear-gradient(135deg, #2b7bff, #54c7ff)',
        textColor: '#ffffff'
      },
      {
        id: 'return',
        label: '部品调品退还',
        tip: '查看退还进度',
        gradient: 'linear-gradient(135deg, #f7b500, #ffd56f)',
        textColor: '#2d2000'
      }
    ],
    activeTab: 'apply',
    applyList: [
      {
        orderNo: 'ESQ20250910-00014',
        company: '秦皇岛房博商贸有限公司',
        partsCount: 1,
        productCount: 0,
        statusText: '审批通过',
        statusType: 'success',
        actionText: '申请登录',
        actionType: 'primary',
        date: '2025-09-10',
        dateHint: '计划发货'
      },
      {
        orderNo: 'ETH20250910-00012',
        company: '宁波三盛工业供应链有限公司',
        partsCount: 2,
        productCount: 0,
        statusText: '备货中',
        statusType: 'waiting',
        actionText: '申请登录',
        actionType: 'primary',
        date: '2025-09-10',
        dateHint: '预计到货'
      },
      {
        orderNo: 'ESQ20250828-00001',
        company: '上海捷顺服务外包有限公司',
        partsCount: 1,
        productCount: 1,
        statusText: '待审核',
        statusType: 'warning',
        actionText: '申请登录',
        actionType: 'primary',
        date: '2025-08-28',
        dateHint: '刚刚提交'
      }
    ],
    returnList: [
      {
        orderNo: 'RET20250910-00003',
        company: '苏州景鸿售后维修中心',
        partsCount: 1,
        productCount: 0,
        statusText: '待回收',
        statusType: 'warning',
        actionText: '退还登录',
        actionType: 'secondary',
        date: '2025-09-10',
        dateHint: '预计入库'
      },
      {
        orderNo: 'RET20250830-00008',
        company: '广东星河服务保障有限公司',
        partsCount: 3,
        productCount: 1,
        statusText: '已入库',
        statusType: 'success',
        actionText: '退还详情',
        actionType: 'success',
        date: '2025-08-30',
        dateHint: '完成退还'
      }
    ],
    filteredList: []
  },

  onLoad() {
    this.updateFilteredList();
  },

  onSwitchTab(event) {
    const { id } = event.currentTarget.dataset;
    if (!id || id === this.data.activeTab) {
      return;
    }

    this.setData(
      {
        activeTab: id
      },
      () => {
        this.updateFilteredList();
      }
    );
  },

  onSearchInput(event) {
    const value = event.detail.value || '';
    const filteredList = this.filterList(this.getActiveList(), value);

    this.setData({
      searchValue: value,
      filteredList
    });
  },

  clearSearch() {
    const filteredList = this.getActiveList();
    this.setData({
      searchValue: '',
      filteredList
    });
  },

  getActiveList() {
    const { activeTab, applyList, returnList } = this.data;
    return activeTab === 'apply' ? applyList : returnList;
  },

  filterList(list, keyword) {
    const rawKeyword = (keyword || '').trim();
    const value = rawKeyword.toLowerCase();
    if (!value) {
      return list;
    }

    return list.filter((item) => {
      const orderNo = (item.orderNo || '').toLowerCase();
      const company = item.company || '';
      return orderNo.indexOf(value) > -1 || company.indexOf(rawKeyword) > -1;
    });
  },

  updateFilteredList() {
    const filteredList = this.filterList(this.getActiveList(), this.data.searchValue);
    this.setData({
      filteredList
    });
  }
});
