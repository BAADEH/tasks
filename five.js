function displayInfo() {
    try {
        const browserInfo = `
            <p><strong>اطلاعات مرورگر:</strong> ${navigator.userAgent || 'نامشخص'}</p>
            <p><strong>زبان مرورگر:</strong> ${navigator.language || navigator.userLanguage || 'نامشخص'}</p>
            <p><strong>پلتفرم سیستم:</strong> ${navigator.platform || 'نامشخص'}</p>
            <p><strong>آدرس فعلی صفحه:</strong> ${window.location.href || 'نامشخص'}</p>
        `;
        
        const container = document.getElementById('info-container');
        if (!container) {
            console.error('عنصر با آیدی "info-container" یافت نشد. لطفاً مطمئن شوید که div با این آیدی در HTML وجود دارد.');
            return;
        }
        
        container.innerHTML = browserInfo;
    } catch (error) {
        console.error('خطا در اجرای تابع displayInfo:', error);
    }
}

document.addEventListener('DOMContentLoaded', displayInfo);