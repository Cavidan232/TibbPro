// Konum Almaq (Animasiyalı)
document.getElementById('getLocation').addEventListener('click', () => {
    const locationResult = document.getElementById('locationResult');
    locationResult.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Konumunuz tapılır...';
    
    setTimeout(() => { // Fake loading for demo
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const lat = position.coords.latitude.toFixed(4);
                    const lon = position.coords.longitude.toFixed(4);
                    locationResult.innerHTML = 
                        `<i class="fas fa-check-circle" style="color: green;"></i> Konumunuz:<br>
                        <b>Enlem:</b> ${lat}, <b>Boylam:</b> ${lon}`;
                },
                (error) => {
                    locationResult.innerHTML = 
                        `<i class="fas fa-times-circle" style="color: red;"></i> Xəta: ${error.message}`;
                }
            );
        } else {
            locationResult.innerHTML = 
                '<i class="fas fa-times-circle" style="color: red;"></i> Brauzer konumu dəstəkləmir!';
        }
    }, 1500);
});

// İlkin Yardım Təlimatları
const instructions = {
    heartAttack: `
        <h3><i class="fas fa-heartbeat"></i> Ürək Tutması:</h3>
        <ol>
            <li>Xəstəni sakit və rahat yerdə yatırın.</li>
            <li>Qravatasını, kəmərini açın.</li>
            <li>Aspirin verin (allergi yoxdursa).</li>
            <li>Təcili yardım çağırın.</li>
        </ol>
    `,
    bleeding: `
        <h3><i class="fas fa-tint"></i> Qanaxma:</h3>
        <ol>
            <li>Təmiz bir bez və ya gəzimi qanayan yerə basın.</li>
            <li>Qan dayanana qədər təzyiq edin.</li>
            <li>Yaranın üstünə təmiz bandaj qoyun.</li>
        </ol>
    `,
    burn: `
        <h3><i class="fas fa-fire"></i> Yanıq:</h3>
        <ol>
            <li>Yanan yeri 10-15 dəq soyuq su altında saxlayın.</li>
            <li>Steril bandajla örtün.</li>
            <li>Yağ, diş macunu və s. sürtməyin!</li>
        </ol>
    `
};

document.getElementById('emergencyType').addEventListener('change', (e) => {
    const instructionsBox = document.getElementById('instructions');
    if (e.target.value) {
        instructionsBox.innerHTML = instructions[e.target.value];
    } else {
        instructionsBox.innerHTML = '';
    }
});

// Təcili Zəng (Animasiya)
document.getElementById('emergencyCall').addEventListener('click', () => {
    this.innerHTML = '<i class="fas fa-phone-alt fa-spin"></i> Zəng edilir...';
    setTimeout(() => {
        window.location.href = "tel:112"; // Mobil üçün
    }, 1000);
});