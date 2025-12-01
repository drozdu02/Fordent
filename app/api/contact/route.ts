import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
    try{
        const {name, email, phone, message} = await req.json();

        if (!name || !email || !message){
            return NextResponse.json({message: "Wszystkie pola są wymagane."}, {status: 400});
        }

        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            secure: true,
            port: 465,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.GMAIL_SECRET_KEY,
            },
        });

        await transporter.sendMail({
            from: process.env.EMAIL,
            to: process.env.EMAIL,
            subject: `Nowa wiadomość od ${name} - Fordent`,
            html: `
            <p><strong>Imię i nazwisko:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Telefon:</strong> ${phone || 'Brak danych'}</p>
            <p><strong>Wiadomość:</strong><br/> ${message}</p>
            `,
        });
        
        return NextResponse.json({message: "Wiadomość została wysłana pomyślnie."}, {status: 200});
    } catch (error){
        console.error("Błąd podczas wysyłania wiadomości:", error);
        return NextResponse.json({message: "Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później."}, {status: 500});
    }
    
}

