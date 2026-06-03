// Interface
interface Playable {
    void play();
}

// Guitar class implementing Playable
class Guitar implements Playable {

    @Override
    public void play() {
        System.out.println("Guitar is playing.");
    }
}

// Piano class implementing Playable
class Piano implements Playable {

    @Override
    public void play() {
        System.out.println("Piano is playing.");
    }
}

public class InterfaceImplementation {

    public static void main(String[] args) {

        // Create objects
        Guitar guitar = new Guitar();
        Piano piano = new Piano();

        // Call play() method
        guitar.play();
        piano.play();
    }
}