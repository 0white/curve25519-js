interface KeyPair {
    private: Uint8Array; // 32-byte private key
    public: Uint8Array;  // 32-byte public key
}

/**
 * Generates a new key pair from the given 32-byte secret seed 
 * (which should be generated with a CSPRNG) and returns it as object
 */
export function generateKeyPair(seed: Uint8Array): KeyPair;
