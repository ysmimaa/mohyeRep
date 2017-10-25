package org.sid;

import java.text.DateFormat;
import java.text.SimpleDateFormat;

import org.sid.dao.ContactRepository;
import org.sid.entities.Contact;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Angular4Application  implements CommandLineRunner{

	@Autowired
	private ContactRepository contactRepository;
	public static void main(String[] args) {
		SpringApplication.run(Angular4Application.class, args);
	}

	@Override
	public void run(String... arg0) throws Exception {

		DateFormat df= new SimpleDateFormat("dd/MM/yyyy");
		contactRepository.save(new Contact("Mohyeddyn", "EL JAIDI", df.parse("12/09/1989"), "test@gmail.com", 67788L, "image.png"));
		contactRepository.save(new Contact("Hamid", "EL GHA", df.parse("12/09/1989"), "test@gmail.com", 67788L, "image.png"));
		contactRepository.save(new Contact("Hassan", "EL 3AL", df.parse("12/09/1989"), "test@gmail.com", 67788L, "image.png"));
		contactRepository.findAll().forEach(c-> {System.out.println(c.getNom());});
	}
}
