// 修复初始化函数，清空演示数据
(function() {
  // 保存原始的 initializeDemoData 函数
  const originalInitializeDemoData = window.initializeDemoData;
  
  // 替换为新的函数
  window.initializeDemoData = function() {
    // 清空现有的张三和李四数据
    localStorage.removeItem('yidingtong_persons');
    localStorage.removeItem('yidingtong_history');
    console.log('演示数据已清空');
  };
  
  // 立即执行一次以清空数据
  window.initializeDemoData();
  
  console.log('已修复初始化函数，不再添加默认的张三和李四数据');
})();