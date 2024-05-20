package com.example.oppgaver;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;


@RestController
public class Controller {
    public final List<Motorvogn> motorvognRegister = new ArrayList<>();


    @PostMapping("/lagremotorvogn")
    public void lagremotorvogn(Motorvogn bil){
        motorvognRegister.add(bil);
    }

    @GetMapping("/hentAlleBiler")
    public List<Motorvogn> hentAlleBiler(){return motorvognRegister;}

    @GetMapping("/slettAlleBiler")
    public void slettAlleBiler(){
        motorvognRegister.clear();
    }
}


