import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [RouterModule,CommonModule],
  templateUrl: './list.html',
  styleUrls: ['./list.css']
})
export class List {
  list= [
    { id: 1, brand: "Maybelline", name: "Baby Lips Lip Balm", price: 129, description: "Hydrating tinted balm, subtle shine, everyday use." },
    { id: 2, brand: "Ever Bilena", name: "Lip & Cheek Stain", price: 150, description: "Multipurpose stain, natural flush, long-lasting." },
    { id: 3, brand: "Ever Bilena", name: "Matte Lipstick", price: 185, description: "Classic bullet lipstick, creamy matte, wide shade range." },
    { id: 4, brand: "Ever Bilena", name: "Pro Lipstick with Vitamin E", price: 200, description: "Classic bullet lipstick enriched with Vitamin E for hydration. Popular for everyday wear shades." },
    { id: 5, brand: "Vice Cosmetics", name: "Water Gel Lip & Cheek Tint", price: 195, description: "Lightweight gel tint, buildable natural look." },
    { id: 6, brand: "Vice Cosmetics", name: "Aura Lip & Cheek Tint", price: 195, description: "2-in-1 tint for lips & cheeks, lightweight formula." },
    { id: 7, brand: "Vice Cosmetics", name: "Little Ponies Lippie (Mini)", price: 195, description: "Collectible mini lipsticks in trendy shades." },
    { id: 8, brand: "Ever Bilena", name: "Advance LTD Liquid Lipstick", price: 225, description: "Long-wearing liquid matte with comfortable feel." },
    { id: 9, brand: "Vice Cosmetics", name: "Good Vibes Matte Lipstick", price: 225, description: "Creamy bullet matte, smooth and non-drying." },
    { id: 10, brand: "Vice Cosmetics", name: "Phenomenal Matte Liquid Lipstick", price: 245, description: "Highly pigmented liquid matte, kiss-proof finish." },
    { id: 11, brand: "Ever Bilena", name: "Advance Lip Define Matte Matic", price: 245, description: "Retractable slim matte lipstick for precise application." },
    { id: 12, brand: "Maybelline", name: "Sensational Liquid Matte Tint", price: 299, description: "Affordable lightweight matte tint, comfy finish." },
    { id: 13, brand: "Maybelline", name: "Color Sensational Creamy Matte", price: 349, description: "Soft matte bullet, buttery smooth formula." },
    { id: 14, brand: "GRWM Cosmetics", name: "Lip Soothies", price: 349, description: "Hydrating tinted balm with glossy finish." },
    { id: 15, brand: "GRWM Cosmetics", name: "Multi-Use Cream Tints", price: 379, description: "Versatile tint for lips & cheeks, buildable coverage." },
    { id: 16, brand: "Peripera", name: "Ink Airy Velvet Tint", price: 380, description: "Lightweight mousse tint, blurred soft lips." },
    { id: 17, brand: "Peripera", name: "Ink Velvet Tint", price: 380, description: "Rich payoff, smooth velvet matte finish." },
    { id: 18, brand: "GRWM Cosmetics", name: "Milk Tint", price: 399, description: "Soft-focus blurred tint, natural K-beauty look." },
    { id: 19, brand: "Maybelline", name: "SuperStay Matte Ink", price: 399, description: "Ultra long-wear liquid matte, lasts up to 16 hours." },
    { id: 20, brand: "Peripera", name: "Ink The Gelato Lip Tint", price: 399, description: "Cooling tint with juicy, vibrant finish." },
    { id: 21, brand: "Peripera", name: "Ink Mood Matte Tint", price: 420, description: "Smooth matte tint, muted trendy shades." },
    { id: 22, brand: "Peripera", name: "Ink Glasting Lip Gloss", price: 420, description: "Glassy shine gloss with subtle tint." },
    { id: 23, brand: "Maybelline", name: "SuperStay Vinyl Ink", price: 429, description: "Glossy + transfer-proof shine, long-lasting formula." },
    { id: 24, brand: "GRWM Cosmetics", name: "Radiance Tint", price: 449, description: "Multi-use creamy tint, blendable and smooth." },
    { id: 25, brand: "GRWM Cosmetics", name: "Radiance Tint Vol. 2", price: 449, description: "Extended shades of their bestselling creamy tint." },
    { id: 26, brand: "MAC", name: "Matte Lipstick (Ruby Woo)", price: 1350, description: "Iconic blue-red matte lipstick, universally flattering." },
    { id: 27, brand: "MAC", name: "Velvet Teddy", price: 1350, description: "Cult-favorite nude shade with a soft matte finish." },
    { id: 28, brand: "MAC", name: "Powder Kiss Lipstick", price: 1450, description: "Blurred matte bullet with soft-focus effect." },
    { id: 29, brand: "MAC", name: "Lustreglass Sheer-Shine", price: 1450, description: "Glossy, moisturizing sheer lipstick." },
    { id: 30, brand: "MAC", name: "Retro Matte Liquid Lipcolour", price: 1600, description: "Intense liquid matte, long-wearing luxury formula." }
  ];

}
