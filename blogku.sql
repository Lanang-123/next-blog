-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 30 Des 2023 pada 13.08
-- Versi server: 10.4.28-MariaDB
-- Versi PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blogku`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `post`
--

CREATE TABLE `post` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image` varchar(255) NOT NULL,
  `slug` varchar(255) NOT NULL,
  `thumbNail` varchar(255) NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT current_timestamp(3)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `post`
--

INSERT INTO `post` (`id`, `title`, `description`, `image`, `slug`, `thumbNail`, `createdAt`) VALUES
(5, 'Survei Terbaru Capres & Cawapres 2024', 'Menurut survei ARCI, elektabilitas Prabowo-Gibran di angka 40,1%. Kemudian disusul Ganjar Pranowo-Mahfud MD 35,9%. Dan pasangan Anies Baswedan-Muhaimin Iskandar di angka 22,2%.Direktur ARCI Baihaki Sirajt membeberkan faktor Prabowo - Gibran unggul di Jati', 'https://files.edgestore.dev/drlfczcy2owawj6o/myPublicImages/_public/f25c150b-78a1-4423-a16a-4f4afd14197b.jpeg', 'survei-terbaru-capres-and-cawapres-2024', 'https://files.edgestore.dev/drlfczcy2owawj6o/myPublicImages/_public/f25c150b-78a1-4423-a16a-4f4afd14197b-thumb.jpeg', '2023-12-06 12:28:50.983'),
(7, 'Pertamina Optimalkan rencana subsidi tepat', 'Subsidi tepat akan digencarkan mulai oktober 2022,bersamaan dengan itu pertamina mempersiapkan moment ini dengan sebaik baiknya', 'https://files.edgestore.dev/drlfczcy2owawj6o/myPublicImages/_public/f239aea2-2548-4087-959f-15044ef6ea6e.jpeg', 'pertamina-optimalkan-rencana-subsidi-tepat', 'https://files.edgestore.dev/drlfczcy2owawj6o/myPublicImages/_public/f239aea2-2548-4087-959f-15044ef6ea6e-thumb.jpeg', '2023-12-08 10:55:02.282');

-- --------------------------------------------------------

--
-- Struktur dari tabel `_prisma_migrations`
--

CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) NOT NULL,
  `checksum` varchar(64) NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) NOT NULL,
  `logs` text DEFAULT NULL,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT current_timestamp(3),
  `applied_steps_count` int(10) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data untuk tabel `_prisma_migrations`
--

INSERT INTO `_prisma_migrations` (`id`, `checksum`, `finished_at`, `migration_name`, `logs`, `rolled_back_at`, `started_at`, `applied_steps_count`) VALUES
('788e7bc7-1400-4155-9479-b11ac6dc377e', '6ee26fe809a04e48f673a22f82ec7f625b2b229a727af89066ab88cf4bdb933e', '2023-12-02 03:56:24.635', '20231202035624_create_table_post', NULL, NULL, '2023-12-02 03:56:24.188', 1);

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `post`
--
ALTER TABLE `post`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `_prisma_migrations`
--
ALTER TABLE `_prisma_migrations`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `post`
--
ALTER TABLE `post`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
