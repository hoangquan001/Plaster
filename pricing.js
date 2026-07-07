const pricingData = [
    {
        system: 'BASI + ALPHA',
        items: [
            {
                detail: 'Thanh chính: VTC-BASI3050<br>Thanh phụ: VTC-ALPHA4000<br>Thanh viền: VTC18/22<br>Ty treo V, phụ kiện 01 lớp tấm Gyproc/Yoshino tiêu chuẩn<br>Nhân công lắp đặt',
                price: 220000
            },
            { detail: 'Tấm chống ẩm', price: 235000 },
            { detail: 'Tấm siêu bảo vệ', price: 240000 }
        ]
    },
    {
        system: 'ALPHA',
        items: [
            {
                detail: 'Thanh chính: VTC-ALPHA4000<br>Thanh phụ: VTC-ALPHA4000<br>Thanh viền: VTC18/22<br>Ty treo V, phụ kiện 01 lớp tấm Gyproc/Yoshino<br>Nhân công lắp đặt',
                price: 190000
            },
            { detail: 'Tấm chống ẩm', price: 205000 },
            { detail: 'Tấm siêu bảo vệ', price: 220000 }
        ]
    },
    {
        system: 'TIKA',
        items: [
            {
                detail: 'Thanh chính: VTC-TIKA4000<br>Thanh phụ: VTC-TIKA4000<br>Thanh viền: VTC18/22<br>Ty treo V, phụ kiện 01 lớp tấm Gyproc/Yoshino<br>Nhân công lắp đặt',
                price: 180000
            },
            { detail: 'Tấm chống ẩm', price: 195000 },
            { detail: 'Tấm siêu bảo vệ', price: 210000 }
        ]
    },
    {
        system: 'M29',
        items: [
            {
                detail: 'Thanh chính/phụ: VTC-M29<br>Thanh viền: VTC18/22<br>Ty treo V, phụ kiện 01 lớp tấm Gyproc/Yoshino<br>Nhân công lắp đặt',
                price: 165000
            },
            { detail: 'Tấm chống ẩm', price: 185000 }
        ]
    }
];

function formatPrice(price) {
    return new Intl.NumberFormat('vi-VN').format(price);
}

function buildPricingTableRows(priceOffset) {
    return pricingData
        .map(({ system, items }) => items
            .map((item, index) => {
                const systemCell = index === 0 ? `<td rowspan="${items.length}" class="system-name">${system}</td>` : '';
                const adjustedPrice = item.price + priceOffset;

                return `
                    <tr>
                        ${systemCell}
                        <td>${item.detail}</td>
                        <td class="price">${formatPrice(adjustedPrice)}</td>
                    </tr>
                `;
            })
            .join(''))
        .join('');
}

function renderPricingTable({ targetId, priceOffset = 0 }) {
    const target = document.getElementById(targetId);

    if (!target) {
        return;
    }

    target.innerHTML = `
        <table>
            <thead>
                <tr>
                    <th>Hệ</th>
                    <th>Chi tiết</th>
                    <th>Đơn giá (VNĐ/m²)</th>
                </tr>
            </thead>
            <tbody>
                ${buildPricingTableRows(priceOffset)}
            </tbody>
        </table>
    `;
}