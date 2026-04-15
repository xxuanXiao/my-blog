# 3个月嵌入式Linux 学习计划（工业机器人方向）

> 2026年3月31日

| 阶段 | 时间 | 学习模块 | 核心知识点 | 必须Demo/实操 | 高频面试题 |进度|  
| :--- | :--- | :--- | :--- | :--- | :--- |:--- |
| **第1个月：Linux核心+编译构建** | 第1周 | 进程/线程/同步 | 线程创建/join/detach；mutex；条件变量；死锁 | 多线程售票、生产者消费者 | 1. 进程与线程区别<br>2. 互斥锁与条件变量用法<br>3. 死锁产生与避免 | |
| | 第2周 | 内存管理+IPC | malloc/mmap；内存泄漏；共享内存/消息队列/管道 | 共享内存通信；内存问题定位 | 1. 内存泄漏怎么排查<br>2. mmap用途<br>3. IPC选型对比 ||
| | 第3周 | Makefile/CMake | Makefile规则；CMake配置；交叉编译 | 多文件项目构建 | 1. Makefile与CMake区别<br>2. 交叉编译如何指定工具链 ||
| | 第4周 | Buildroot | 配置编译；添加包；rootfs定制 | 制作最小根文件系统 | 1. Buildroot与Yocto区别<br>2. 如何添加自定义应用 ||
| **第2个月：驱动+设备树+调试** | 第5周 | 字符设备驱动 | 驱动框架；file_operations；ioctl；设备节点 | 手写LED/按键驱动 | 1. 字符设备驱动流程<br>2. ioctl作用与用法 ||
| | 第6周 | 设备树DTS/DTSI | 节点；compatible；reg；中断；GPIO | 修改DTS并验证加载 | 1. 设备树作用<br>2. 内核如何匹配驱动 ||
| | 第7周 | 外设驱动 | I²C/SPI/UART/GPIO驱动；通信调试 | I²C读传感器；UART收发 | 1. I²C驱动流程<br>2. 如何排查外设不通 ||
| | 第8周 | 调试工具 | gdb远程；core；valgrind；strace/perf | 调试崩溃、查泄漏 | 1. core文件分析步骤<br>2. valgrind使用场景 ||
| **第3个月：工业总线+实时Linux** | 第9周 | CAN/CANopen | CAN帧；SocketCAN；PDO/SDO/NMT | SocketCAN收发 | 1. CAN特点<br>2. CANopen PDO与SDO区别 ||
| | 第10周 | EtherCAT | 主从架构；过程数据；SOEM/IgH；伺服 | SOEM主站控制从站 | 1. EtherCAT原理<br>2. 与CAN/EtherNet区别 ||
| | 第11周 | Linux实时性 | PREEMPT_RT；调度策略；中断延迟优化 | 打实时补丁、测性能 | 1. 何为实时Linux<br>2. 工业为何要PREEMPT_RT ||
| | 第12周 | BLE工业+项目包装 | BLE GATT；主/从机；透传；重连；面试包装 | BLE数据透传 | 1. BLE GATT结构<br>2. 蓝牙断开如何重连 ||