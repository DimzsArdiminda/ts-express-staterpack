---

# **Backend Project with TypeScript Express and Prisma**

Ini adalah aplikasi backend menggunakan TypeScript dan Express.js. Proyek ini mengatur server dasar dengan Express, mengatur routing, dan memanfaatkan environment variables menggunakan dotenv.

## **Fitur:**
- Express server untuk menangani permintaan HTTP.
- Routing dasar menggunakan Express Router.
- Menggunakan environment variables dari file `.env`.

---

## **Prasyarat**

Sebelum memulai, pastikan kamu memiliki beberapa hal di bawah ini:

- **Node.js** (v14.x atau lebih tinggi) terinstal di sistem kamu. Jika belum, silakan [download Node.js](https://nodejs.org/) terlebih dahulu.
- **pnpm** untuk manajemen paket. Jika belum terinstal, kamu dapat menginstalnya dengan perintah berikut:

```bash
npm install -g pnpm
```

---

## **Langkah-langkah Penginstalan**

Ikuti langkah-langkah berikut untuk mengatur proyek ini di komputer lokal kamu:

### 1. **Clone Repository**

Clone repository ke mesin lokal kamu dengan perintah:

```bash
git clone https://github.com/DimzsArdiminda/ts-express-staterpack.git
```

Gantilah `username` dan `repository-name` sesuai dengan nama akun dan repositori kamu di GitHub.

### 2. **Instalasi Dependencies**

Arahkan terminal kamu ke direktori proyek yang telah di-clone:

```bash
cd repository-name
```

Kemudian, instal dependencies menggunakan `pnpm`:

```bash
pnpm install
```

### 3. **Pengaturan Environment Variables**

Buat file `.env` di root proyek kamu dan tambahkan konfigurasi berikut:

```dotenv
PORT=3000
HOST=localhost
```

File ini akan digunakan untuk mengatur port dan host server yang berjalan.

### 4. **Mengonfigurasi TypeScript**

Jika kamu belum memiliki file `tsconfig.json`, kamu bisa menjalankan perintah berikut untuk mengonfigurasinya secara otomatis:

```bash
npx tsc --init
```

Setelah itu, sesuaikan `tsconfig.json` kamu agar sesuai dengan pengaturan berikut:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "rootDir": "src",
    "outDir": "dist",
    "esModuleInterop": true,
    "strict": true,
    "skipLibCheck": true
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```

### 5. **Menjalankan Aplikasi**

Setelah semua langkah di atas selesai, kamu dapat menjalankan aplikasi dengan menggunakan `pnpm`:

```bash
pnpm run dev
```

Perintah ini akan menjalankan server dalam mode pengembangan dengan menggunakan `ts-node-dev`.

### 6. **Akses Aplikasi**

Setelah server berjalan, kamu bisa mengakses aplikasi di browser dengan URL berikut:

```
http://localhost:3000
```

---

## **Struktur Proyek**

Berikut adalah struktur proyek yang diharapkan:

```
dir/
├── src/
│   ├── index.ts         # File utama untuk menjalankan aplikasi
│   └── routers/
│       └── mainrouter.ts # File router utama
├── dist/                # Folder output hasil kompilasi TypeScript
├── .env                 # File untuk environment variables
├── package.json         # Daftar dependencies dan script
├── tsconfig.json        # Konfigurasi TypeScript
└── pnpm-lock.yaml       # Kunci dependensi pnpm
```

---

## **Kontribusi**

Jika kamu ingin berkontribusi pada proyek ini, ikuti langkah-langkah berikut:

1. Fork repositori ini.
2. Buat cabang baru (`git checkout -b feature/your-feature`).
3. Lakukan perubahan dan commit.
4. Push ke cabang kamu (`git push origin feature/your-feature`).
5. Buat Pull Request.

---