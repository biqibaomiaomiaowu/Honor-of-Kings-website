// 王者荣耀网站主要JavaScript逻辑

// 全局配置
const CONFIG = {
    ANIMATION_DURATION: 800,
    SCROLL_DURATION: 600,
    PARTICLE_COUNT: 50,
    COLORS: {
        PRIMARY: '#ffd700',
        SECONDARY: '#ff6b35',
        BACKGROUND: '#0f1419',
        SURFACE: '#1a2332'
    }
};

// 工具函数
const Utils = {
    // 防抖函数
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // 节流函数
    throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    },

    // 随机数生成
    random(min, max) {
        return Math.random() * (max - min) + min;
    },

    // 元素是否在视口中
    isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
};

// 滚动管理器
const ScrollManager = {
    init() {
        this.setupSmoothScroll();
        this.setupScrollAnimations();
        this.setupScrollToTop();
    },

    // 平滑滚动
    setupSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', (e) => {
                e.preventDefault();
                const target = document.querySelector(anchor.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    },

    // 滚动动画
    setupScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // 观察所有需要动画的元素
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'all 0.6s ease';
            observer.observe(element);
        });
    },

    // 返回顶部按钮
    setupScrollToTop() {
        const scrollBtn = document.createElement('div');
        scrollBtn.className = 'scroll-to-top';
        scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
        scrollBtn.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            background: rgba(255, 215, 0, 0.8);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            transition: all 0.3s ease;
            z-index: 1000;
            opacity: 0;
            visibility: hidden;
        `;

        document.body.appendChild(scrollBtn);

        // 滚动事件监听
        const toggleScrollBtn = Utils.throttle(() => {
            if (window.scrollY > 300) {
                scrollBtn.style.opacity = '1';
                scrollBtn.style.visibility = 'visible';
            } else {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.visibility = 'hidden';
            }
        }, 100);

        window.addEventListener('scroll', toggleScrollBtn);

        // 点击返回顶部
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        // 悬停效果
        scrollBtn.addEventListener('mouseenter', () => {
            scrollBtn.style.background = CONFIG.COLORS.PRIMARY;
            scrollBtn.style.transform = 'scale(1.1)';
        });

        scrollBtn.addEventListener('mouseleave', () => {
            scrollBtn.style.background = 'rgba(255, 215, 0, 0.8)';
            scrollBtn.style.transform = 'scale(1)';
        });
    }
};

// 粒子效果管理器
const ParticleManager = {
    init() {
        this.createParticleContainer();
        this.startParticleAnimation();
    },

    createParticleContainer() {
        const container = document.createElement('div');
        container.id = 'particles-container';
        container.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: -1;
        `;
        document.body.appendChild(container);
    },

    startParticleAnimation() {
        // 使用Canvas创建粒子效果
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const container = document.getElementById('particles-container');
        
        container.appendChild(canvas);

        // 设置画布大小
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // 粒子数组
        const particles = [];

        // 创建粒子
        for (let i = 0; i < CONFIG.PARTICLE_COUNT; i++) {
            particles.push({
                x: Utils.random(0, canvas.width),
                y: Utils.random(0, canvas.height),
                vx: Utils.random(-1, 1),
                vy: Utils.random(-1, 1),
                size: Utils.random(1, 3),
                opacity: Utils.random(0.1, 0.5)
            });
        }

        // 动画循环
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particles.forEach(particle => {
                // 更新位置
                particle.x += particle.vx;
                particle.y += particle.vy;

                // 边界检测
                if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
                if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

                // 绘制粒子
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 215, 0, ${particle.opacity})`;
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();
    }
};

// 导航管理器
const NavigationManager = {
    init() {
        this.setupActiveNavigation();
        this.setupMobileMenu();
    },

    // 设置活跃导航
    setupActiveNavigation() {
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const navLinks = document.querySelectorAll('.nav-links a');
        
        navLinks.forEach(link => {
            const href = link.getAttribute('href');
            if (href === currentPage || (currentPage === '' && href === 'index.html')) {
                link.classList.add('active');
            }
        });
    },

    // 移动端菜单
    setupMobileMenu() {
        // 检查是否需要移动端菜单
        if (window.innerWidth <= 768) {
            const navbar = document.querySelector('.nav-container');
            const mobileMenuBtn = document.createElement('button');
            mobileMenuBtn.className = 'mobile-menu-btn';
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            mobileMenuBtn.style.cssText = `
                background: none;
                border: none;
                color: #ffd700;
                font-size: 1.5rem;
                cursor: pointer;
                display: block;
            `;

            navbar.appendChild(mobileMenuBtn);

            // 移动端菜单逻辑
            let isMenuOpen = false;
            mobileMenuBtn.addEventListener('click', () => {
                isMenuOpen = !isMenuOpen;
                // 这里可以添加移动端菜单的显示/隐藏逻辑
            });
        }
    }
};

// 加载管理器
const LoadingManager = {
    init() {
        this.setupLoadingScreen();
        this.setupImageLazyLoading();
    },

    setupLoadingScreen() {
        const loadingScreen = document.createElement('div');
        loadingScreen.className = 'loading-screen';
        loadingScreen.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #0f1419 0%, #1a2332 50%, #0d1117 100%);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            z-index: 9999;
            transition: opacity 0.5s ease;
        `;

        loadingScreen.innerHTML = `
            <div style="text-align: center; color: #ffd700;">
                <i class="fas fa-crown" style="font-size: 4rem; margin-bottom: 1rem; animation: spin 2s linear infinite;"></i>
                <h2 style="font-size: 2rem; margin-bottom: 1rem;">王者荣耀</h2>
                <p style="color: #b0b0b0;">加载中...</p>
            </div>
        `;

        document.body.appendChild(loadingScreen);

        // 页面加载完成后隐藏加载屏幕
        window.addEventListener('load', () => {
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.remove();
                }, 500);
            }, 1000);
        });
    },

    setupImageLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const imageObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            });
        });

        images.forEach(img => imageObserver.observe(img));
    }
};

// 性能监控
const PerformanceMonitor = {
    init() {
        this.monitorPageLoad();
        this.monitorScrollPerformance();
    },

    monitorPageLoad() {
        window.addEventListener('load', () => {
            const loadTime = performance.now();
            console.log(`页面加载时间: ${loadTime.toFixed(2)}ms`);
        });
    },

    monitorScrollPerformance() {
        let scrollCount = 0;
        const scrollHandler = Utils.throttle(() => {
            scrollCount++;
        }, 100);

        window.addEventListener('scroll', scrollHandler);

        // 每10秒报告一次滚动性能
        setInterval(() => {
            if (scrollCount > 0) {
                console.log(`滚动事件频率: ${scrollCount}次/10秒`);
                scrollCount = 0;
            }
        }, 10000);
    }
};

// 错误处理
const ErrorHandler = {
    init() {
        window.addEventListener('error', this.handleError);
        window.addEventListener('unhandledrejection', this.handlePromiseRejection);
    },

    handleError(event) {
        console.error('JavaScript错误:', event.error);
        // 这里可以添加错误上报逻辑
    },

    handlePromiseRejection(event) {
        console.error('未处理的Promise拒绝:', event.reason);
        event.preventDefault();
    }
};

// 主应用初始化
const App = {
    init() {
        // 等待DOM加载完成
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => {
                this.initializeComponents();
            });
        } else {
            this.initializeComponents();
        }
    },

    initializeComponents() {
        try {
            // 初始化各个管理器
            ScrollManager.init();
            NavigationManager.init();
            LoadingManager.init();
            PerformanceMonitor.init();
            ErrorHandler.init();

            // 只有在主页才显示粒子效果
            if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
                ParticleManager.init();
            }

            console.log('王者荣耀网站初始化完成');
        } catch (error) {
            console.error('初始化失败:', error);
        }
    }
};

// 启动应用
App.init();

// 导出全局对象供其他脚本使用
window.HonorOfKings = {
    Utils,
    CONFIG,
    ScrollManager,
    ParticleManager,
    NavigationManager
};